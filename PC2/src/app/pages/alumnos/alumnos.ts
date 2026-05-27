import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-alumnos',
  imports: [CommonModule, FormsModule],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css',
})
export class Alumnos {
  alumnos = [
    {
      codigo: 'A001',
      nombre: 'Juan Pérez',
      curso: 'Desarrollo Web',
      nota1: 15,
      nota2: 18
    },
    {
      codigo: 'A002',
      nombre: 'Maria Gomez',
      curso: 'Diseño Web',
      nota1: 14,
      nota2: 17
    }
  ];

  fechaActual: Date = new Date();

  nuevoCodigo: string = '';
  nuevoNombre: string = '';
  nuevaNota1: number = 0;
  nuevaNota2: number = 0;

  agregarAlumno() {
    if (this.nuevaNota1 < 0 || this.nuevaNota1 > 20 || this.nuevaNota2 < 0 || this.nuevaNota2 > 20) {
      alert('Las notas deben estar entre 0 y 20.');
      return;
    }
    
    if (this.nuevoCodigo === '' || this.nuevoNombre === '') {
      alert('Todos los campos son obligatorios.');
      return;
    }

    const nuevoAlumno = {
      codigo: this.nuevoCodigo,
      nombre: this.nuevoNombre,
      curso: 'Nuevo Curso',
      nota1: this.nuevaNota1,
      nota2: this.nuevaNota2
    };
    this.alumnos.push(nuevoAlumno);
  }

  calcularPromedio(nota1: number, nota2: number): number {
    return (nota1 + nota2) / 2;
  }

  getCondicion(nota1: number, nota2: number): string {
    const promedio = this.calcularPromedio(nota1, nota2);
    return promedio >= 13 ? 'Aprobado' : 'Desaprobado';
  }
}
