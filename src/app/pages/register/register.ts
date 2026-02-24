import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [InputTextModule, PasswordModule, ButtonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class RegisterComponent {}