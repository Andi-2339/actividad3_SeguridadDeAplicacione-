import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ButtonModule, CardModule, RouterModule],
  templateUrl: './landing.html',
  styleUrls: ['./landing.css']
})
export class LandingComponent {}