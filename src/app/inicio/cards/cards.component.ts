import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

import { InicioRoutingModule } from '../inicio-routing.module';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  standalone: true,
  imports: [CardModule, ButtonModule, InicioRoutingModule]
})
export class CardsComponent {}
