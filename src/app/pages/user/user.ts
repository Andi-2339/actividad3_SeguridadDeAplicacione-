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
  selector: 'app-user',
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
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {

  users: any[] = [
    {
      id: 1,
      nombre: 'Andrea Romero Garcia',
      email: 'andrea@gmail.com',
      telefono: '4426024723',
      edad: 20
    }
  ];

  displayDialog: boolean = false;
  user: any = {};
  editMode: boolean = false;

  constructor(private messageService: MessageService) {}

  openNew() {
    this.user = {};
    this.editMode = false;
    this.displayDialog = true;
  }

  editUser(u: any) {
    this.user = { ...u };
    this.editMode = true;
    this.displayDialog = true;
  }

  saveUser() {
    if (this.editMode) {
      const index = this.users.findIndex(x => x.id === this.user.id);
      this.users[index] = this.user;

      this.messageService.add({
        severity: 'success',
        summary: 'Actualizado',
        detail: 'Usuario actualizado correctamente'
      });

    } else {
      this.user.id = Date.now();
      this.users.push(this.user);

      this.messageService.add({
        severity: 'success',
        summary: 'Creado',
        detail: 'Usuario creado correctamente'
      });
    }

    this.displayDialog = false;
  }

  deleteUser(u: any) {
    this.users = this.users.filter(x => x.id !== u.id);

    this.messageService.add({
      severity: 'warn',
      summary: 'Eliminado',
      detail: 'Usuario eliminado correctamente'
    });
  }
}