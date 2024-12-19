import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule} from 'primeng/card';
import { SpeedDialModule } from 'primeng/speeddial';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';


import { InicioRoutingModule } from './inicio-routing.module';
import { MenuTareasComponent } from './menu-tareas/menu-tareas.component';
import { Matriz1Component } from './matriz1/matriz1.component';
import { Matriz2Component } from './matriz2/matriz2.component';
import { FormsComponent } from './forms/forms.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { PagWebComponent } from './pag-web/pag-web.component';


@NgModule({
  declarations: [
    MenuTareasComponent,
    Matriz1Component,
    Matriz2Component,
    FormsComponent,
    GaleriaComponent,
    PagWebComponent

    
        
  ],
  imports: [
    AngularFormsModule,
    CommonModule,
    InicioRoutingModule,
    ButtonModule,
    CardModule,
    SpeedDialModule,
    SplitButtonModule,
    ToastModule,
    MultiSelectModule,
    ToolbarModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    GalleriaModule,
    CarouselModule,
  
  ],
  providers:[
    MessageService,
    
  
  ]
})
export class InicioModule { }
