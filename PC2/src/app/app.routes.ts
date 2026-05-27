import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { Productos } from './pages/productos/productos';
import { Registro } from './pages/registro/registro';
import { Alumnos } from './pages/alumnos/alumnos';
import { Cnotas } from './pages/cnotas/cnotas';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'inicio', component: Inicio },
    { path: 'productos', component: Productos},
    { path: 'registro', component: Registro},
    { path:'alumnos', component: Alumnos },
    { path:'notas', component: Cnotas },
    { path: '**', redirectTo: 'inicio'}
];
