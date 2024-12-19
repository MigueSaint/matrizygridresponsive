import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule} from 'primeng/card';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';


import { InicioRoutingModule } from './inicio-routing.module';
import { MenuTareasComponent } from './menu-tareas/menu-tareas.component';
import { Matriz1Component } from './matriz1/matriz1.component';
import { Matriz2Component } from './matriz2/matriz2.component';
import { FormsComponent } from './forms/forms.component';
import { GaleriaComponent } from './galeria/galeria.component';


@NgModule({
  declarations: [
    MenuTareasComponent,
    Matriz1Component,
    Matriz2Component,
    FormsComponent,
    GaleriaComponent,
        
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    ButtonModule,
    CardModule,
    SpeedDialModule,
    SplitButtonModule,
    ToastModule,
    MultiSelectModule,
  
  ],
  providers:[
    MessageService,
    
  
  ]
})
export class InicioModule { }
