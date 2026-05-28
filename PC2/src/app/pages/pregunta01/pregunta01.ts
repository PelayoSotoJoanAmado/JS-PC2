import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta01',
  imports: [CommonModule, FormsModule],
  templateUrl: './pregunta01.html',
  styleUrl: './pregunta01.css',
})
export class Pregunta01 {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;

  sumaNotas: number = 0;
  promedioNotas: number = 0;
  estadoAcademico: string = '';
  observacion: string = '';

  procesarResultado(): void {
    if(this.nota1 < 0 ||  this.nota1 > 20 || this.nota2 < 0 || this.nota2 > 20 || this.nota3 < 0 || this.nota3 > 20){
      alert("Ingrese notas válidas");
      return;
    }
    this.sumaNotas = this.nota1 + this.nota2 + this.nota3;
    this.promedioNotas = this.sumaNotas / 3;
    this.calcularEstadoAcademico(this.promedioNotas);
  }

  calcularEstadoAcademico(promedio: number): void {


    if(promedio >= 13){
      this.estadoAcademico = "Aprobado";

      if(promedio >= 17){
        this.observacion = "Excelente";
        return;
      }

      if(promedio < 17 ){
        this.observacion = "Regular";
      }
    } else {
      this.estadoAcademico = "Desaprobado";
      this.observacion = "En riesgo";
    }

  }
  limpiarF(): void {
    this.nota1 = 0;
    this.nota2 = 0;
    this.nota3 = 0;
    this.limpiarR();
  }
  
  limpiarR(): void {
    this.sumaNotas = 0;
    this.observacion = '';
    this.estadoAcademico = '';
  }
}
