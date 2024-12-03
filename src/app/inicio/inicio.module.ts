import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { MenuTareasComponent } from './menu-tareas/menu-tareas.component';
import { Matriz1Component } from './matriz1/matriz1.component';
import { Matriz2Component } from './matriz2/matriz2.component';


@NgModule({
  declarations: [
    MenuTareasComponent,
    Matriz1Component,
    Matriz2Component
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
