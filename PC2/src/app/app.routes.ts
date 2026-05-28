import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Registro } from './pages/registro/registro';
import { Alumnos } from './pages/alumnos/alumnos';
import { Pregunta01 } from './pages/pregunta01/pregunta01';
import { Pregunta02 } from './pages/pregunta02/pregunta02';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: Inicio },
    { path: 'productos', component: Productos},
    { path: 'registro', component: Registro},
    { path:'alumnos', component: Alumnos },
    { path: 'pregunta1', component: Pregunta01 },
    { path: 'pregunta2', component: Pregunta02 },
    { path: '**', redirectTo: 'inicio'}
];
