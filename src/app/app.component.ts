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

  indiceEdicao: number | null = null;


  cadastrar() {

    if (this.modelo.trim() === '' || this.valor === null || this.valor <= 0) {
      alert('Preencha todos os campos!');
      return;
    }


    // ATUALIZAR
    if (this.indiceEdicao !== null) {

      this.lista[this.indiceEdicao].modelo = this.modelo.toUpperCase();
      this.lista[this.indiceEdicao].valor = this.valor;

      this.indiceEdicao = null;

    }

    // CADASTRAR NOVO
    else {

      this.lista.push({
        modelo: this.modelo.toUpperCase(),
        valor: this.valor
      });

    }


    this.modelo = '';
    this.valor = null;

  }


  editar(indice: number) {

    this.modelo = this.lista[indice].modelo;
    this.valor = this.lista[indice].valor;

    this.indiceEdicao = indice;

  }


  remover(indice: number) {

    this.lista.splice(indice, 1);

    if (this.indiceEdicao === indice) {

      this.modelo = '';
      this.valor = null;
      this.indiceEdicao = null;

    }

  }

}