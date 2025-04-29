import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { EmployeeComponent } from './page/employee/employee.component';
import { HomeComponent } from './page/home/home.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  
  {
    path: 'login', component: LoginComponent, children: [
      { path: 'employee', component: EmployeeComponent }
    ]
  },

  { path: 'logout', component: LoginComponent }
];