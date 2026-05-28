import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta02',
  imports: [CommonModule, FormsModule],
  templateUrl: './pregunta02.html',
  styleUrl: './pregunta02.css',
})

export class Pregunta02 {

  nombre: string = '';
  correo: string = '';
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;
  resultadoFinal: string = '';


  procesarIMC(): void {
    if (this.nombre === '' || this.correo === '' || this.peso < 10 || this.peso > 300 || this.altura < 0.5 || this.altura > 2.5){
      alert("Ingrese todos los valores y verifique que se encuentren en los rangos correspondientes");
      return;
    }
    this.imc = (this.peso / this.altura ** 2);
    this.evaluarResultadoIMC();
  }

  evaluarResultadoIMC(): void {
    if (this.imc < 18.5) {
      this.resultadoFinal = "Bajo peso";
    } else {
      if (this.imc >= 18.5 && this.imc < 25) {
        this.resultadoFinal = "Peso Saludable";
      }

      if (this.imc >= 25 && this.imc < 30) {
        this.resultadoFinal = "Sobrepeso";
      }
      if (this.imc >= 30) {
        this.resultadoFinal = "Obesidad";
      }
    }
  }
}