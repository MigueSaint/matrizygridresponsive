import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'inicio', loadChildren:()=>import('./inicio/inicio.module').then(m=>m.InicioModule)},
    {path: '', redirectTo: '/inicio/menu-tareas', pathMatch: 'full'}

];
