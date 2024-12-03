import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTareasComponent } from './menu-tareas/menu-tareas.component';
import { Matriz1Component } from './matriz1/matriz1.component';
import { Matriz2Component } from './matriz2/matriz2.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

const routes: Routes = [
  
  { path: "menu-tareas", component: MenuTareasComponent },
  { path: "matriz1", component: Matriz1Component },
  { path: "matriz2", component: Matriz2Component },
  { path: 'cards', loadComponent:()=>import('./cards/cards.component').then((m) => m.CardsComponent), },
  { path: "", redirectTo: '/menu-tareas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
