import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
  
})
export class FormsComponent {
  
  dateValue: Date | null = null;
  username: string = '';
  email: string = '';
  selectedOption: any = null;
  date: Date | undefined;

  dropdownOptions = [
    { label: 'Opción 1', value: 1 },
    { label: 'Opción 2', value: 2 },
    { label: 'Opción 3', value: 3 },
  ];
}
