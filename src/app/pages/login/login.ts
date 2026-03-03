import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  loginForm!: FormGroup;  // <- solo declaramos

  constructor(private fb: FormBuilder, private router: Router) {
    // <- lo inicializamos aquí
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

login() {
  if (this.loginForm.invalid) return;

  const { email, password } = this.loginForm.value;

  if (email === 'andrea@gmail.com' && password === 'Admin123!@#') {
    this.router.navigate(['/dashboard/group']);
  } else {
    alert('Credenciales incorrectas');
  }
}
}