import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenuItem, MessageService } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [ButtonModule, SpeedDialModule, ToastModule, SplitButtonModule],
  providers: [MessageService],
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit {
  loading: boolean = false; // Controla el estado de carga para botones
  menuVisible: boolean = false; // Estado para alternar visibilidad del menú
  items: MenuItem[] = []; // Elementos para SpeedDial
  splitButtonItems: MenuItem[] = []; // Opciones del SplitButton
  speedDialItems: MenuItem[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    // Configuración para SpeedDial
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Add',
            detail: 'Data Added'
          });
        }
      },
      {
        icon: 'pi pi-refresh',
        command: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Update',
            detail: 'Data Updated'
          });
        }
      },
      {
        icon: 'pi pi-trash',
        command: () => {
          this.messageService.add({
            severity: 'error',
            summary: 'Delete',
            detail: 'Data Deleted'
          });
        }
      },
      {
        icon: 'pi pi-upload',
        routerLink: ['/fileupload']
      },
      {
        icon: 'pi pi-external-link',
        target: '_blank',
        url: 'http://angular.io'
      }
    ];

    // Configuración para SplitButton
    this.splitButtonItems = [
      {
        label: 'Actualizar',
        icon: 'pi pi-refresh',
        command: () => this.showMessage('success', 'Actualizar', 'Datos actualizados'),
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => this.showMessage('error', 'Eliminar', 'Datos eliminados'),
      },
      {
        label: 'Guardar como',
        icon: 'pi pi-save',
        command: () => this.showMessage('info', 'Guardar', 'Guardado como nuevo archivo'),
      },
    
      {
        label: 'Angular Website',
        icon: 'pi pi-external-link',
        url: 'http://angular.io'
      },
        ];
  }

  // Muestra mensaje de éxito

  showMessage(severity: string, summary: string, detail: string) {
    this.messageService.add({ severity, summary, detail });
  }
  
  save(severity: string) {
    this.messageService.add({
      severity: severity,
      summary: 'Success',
      detail: 'Data Saved'
    });
  }

  update() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Data Updated'
    });
  }

  delete() {
    this.messageService.add({
      severity: 'error',
      summary: 'Deleted',
      detail: 'Data Deleted'
    });
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
