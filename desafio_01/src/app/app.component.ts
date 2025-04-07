import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaClienteComponent } from "./lista-cliente/lista-cliente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
