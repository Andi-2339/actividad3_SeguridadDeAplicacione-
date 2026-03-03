import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './group.html',
  styleUrls: ['./group.css']
})
export class GroupComponent {

  groups: any[] = [
    {
      id: 1,
      nombre: 'Proyecto Alpha',
      categoria: 'Desarrollo',
      nivel: 'Alto',
      autor: 'Andrea',
      miembros: 5,
      tickets: 10
    }
  ];

  displayDialog: boolean = false;
  group: any = {};
  editMode: boolean = false;

  constructor(private messageService: MessageService) {}

  openNew() {
    this.group = {};
    this.editMode = false;
    this.displayDialog = true;
  }

  editGroup(g: any) {
    this.group = { ...g };
    this.editMode = true;
    this.displayDialog = true;
  }

  saveGroup() {
    if (this.editMode) {
      const index = this.groups.findIndex(x => x.id === this.group.id);
      this.groups[index] = this.group;

      this.messageService.add({
        severity: 'success',
        summary: 'Actualizado',
        detail: 'Grupo actualizado correctamente'
      });

    } else {
      this.group.id = Date.now();
      this.groups.push(this.group);

      this.messageService.add({
        severity: 'success',
        summary: 'Creado',
        detail: 'Grupo creado correctamente'
      });
    }

    this.displayDialog = false;
  }

  deleteGroup(g: any) {
    this.groups = this.groups.filter(x => x.id !== g.id);

    this.messageService.add({
      severity: 'warn',
      summary: 'Eliminado',
      detail: 'Grupo eliminado correctamente'
    });
  }
}