import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DetalhesClienteComponent } from '../detalhes-cliente/detalhes-cliente.component';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-lista-cliente',
  standalone: true,
  imports: [NgFor, NgIf, DetalhesClienteComponent],
  templateUrl: './lista-cliente.component.html',
  styleUrl: './lista-cliente.component.css'
})
export class ListaClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteSelecionado: Cliente | null = null;
  modoEdicao = false;
  mostrarModal = false;
  mostrarConfirmacaoExclusao = false;
  idParaExcluir: number | null = null;
  proximoId = 1;
  

  ngOnInit(): void {
    this.clientes = [
      {id: this.proximoId++, nome: 'Gerson Toller', telefone: '(92) 995665565', perfil: 'CEO', urlFoto: 'assets/images/gerson.png'},
      {id: this.proximoId++, nome: 'Paulo', telefone: '(92) 995654220', perfil: 'CTO', urlFoto: 'assets/images/paulo.jpg'}
    ];
  }

  novoCliente(): void{
    this.clienteSelecionado = null;
    this.modoEdicao = false;
    this.mostrarModal = true;
  }

  editarCliente(cliente: Cliente): void{
    this.clienteSelecionado = { ...cliente };
    this.modoEdicao = true;
    this.mostrarModal = true;
  }

  excluirCliente(): void{
    if(this.idParaExcluir !== null) {
      this.clientes = this.clientes.filter(cliente => cliente.id !== this.idParaExcluir);
      this.mostrarConfirmacaoExclusao = false;
      this.idParaExcluir = null;
    }
  }

  confirmarExclusao(id: number): void{
    this.idParaExcluir = id;
    this.mostrarConfirmacaoExclusao = true;
  }

  cancelarExclusao(): void {
    this.mostrarConfirmacaoExclusao = false;
    this.idParaExcluir = null;
  }

  salvarCliente(cliente: Cliente): void {
    if(this.modoEdicao) {
      const index = this.clientes.findIndex(c => c.id === cliente.id);
      if(index !== -1) {
        this.clientes[index] = cliente;
      }
    }else {
      cliente.id = this.proximoId++;
      this.clientes.push(cliente);
    }
    this.fecharModal();
  }

  fecharModal(): void{
    this.mostrarModal = false;
    this.clienteSelecionado = null;
  }

  
}
