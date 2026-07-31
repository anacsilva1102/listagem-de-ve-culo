import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  modelo: string = '';
  valor: number | null = null;

  lista: any[] = [];

  cadastrar() {

    if (this.modelo.trim() === '' || this.valor === null || this.valor <= 0) {
      alert('Preencha todos os campos!');
      return;
    }

    this.lista.push({
      modelo: this.modelo.toUpperCase(),
      valor: this.valor
    });

    this.modelo = '';
    this.valor = null;

  }

  remover(indice: number) {

    this.lista.splice(indice, 1);

  }

}