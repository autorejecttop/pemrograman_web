import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  {
    title: 'Home | Dalpa',
    path: '',
    component: DashboardComponent,
  },
  {
    title: 'Users | Dalpa',
    path: 'users',
    component: UsersComponent,
  },
];
