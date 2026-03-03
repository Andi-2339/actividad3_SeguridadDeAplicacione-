import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { GroupComponent } from './pages/group/group';
import { UserComponent } from './pages/user/user';
import { HomeComponent } from './pages/home/home';
import { MainLayoutComponent } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
  path: 'dashboard',
  component: MainLayoutComponent,
  children: [
    { path: 'home', component: HomeComponent },
    { path: 'group', component: GroupComponent },
    { path: 'user', component: UserComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
  ]
 }
];