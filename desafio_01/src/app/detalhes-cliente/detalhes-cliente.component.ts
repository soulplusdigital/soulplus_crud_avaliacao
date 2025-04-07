import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-detalhes-cliente',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './detalhes-cliente.component.html',
  styleUrl: './detalhes-cliente.component.css'
})
export class DetalhesClienteComponent implements OnInit{

  @Input() cliente: Cliente | null = null
  @Input() modoEdicao:boolean = false;
  @Output() salvar = new EventEmitter<Cliente>();
  @Output() cancelar = new EventEmitter<void>();

  clienteForm: Cliente = {
    id: 0,
    nome: '',
    telefone: '',
    perfil: '',
    urlFoto: '',
  };

  ngOnInit(): void {
    if (this.cliente) {
      this.clienteForm = { ...this.cliente}
    }
  }

  onSubmit(): void{
    if (this.validarFormulario()) {
      this.salvar.emit(this.clienteForm);
    }
  }

  onCancel(): void {
    this.cancelar.emit();
  }

  validarFormulario(): boolean {
    return !!this.clienteForm.nome && !!this.clienteForm.telefone;
  }

}
