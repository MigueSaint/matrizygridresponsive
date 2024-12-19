import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuTareasComponent } from './menu-tareas/menu-tareas.component';
import { Matriz1Component } from './matriz1/matriz1.component';
import { Matriz2Component } from './matriz2/matriz2.component';
import { BotonesComponent } from './botones/botones.component';
import { FormsComponent } from './forms/forms.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PagWebComponent } from './pag-web/pag-web.component';

const routes: Routes = [
  
  { path: "menu-tareas", component: MenuTareasComponent },
  { path: "matriz1", component: Matriz1Component },
  { path: "matriz2", component: Matriz2Component },
  { path: "forms", component: FormsComponent },
  { path: "galeria", component: GaleriaComponent },
  { path: "paginaweb", component: PagWebComponent },
  { path: 'cards', loadComponent:()=>import('./cards/cards.component').then((m) => m.CardsComponent), },
  { path: "botones", loadComponent:()=>import('./botones/botones.component').then((m) => m.BotonesComponent), },
  { path: "", redirectTo: '../inicio/menu-tareas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
