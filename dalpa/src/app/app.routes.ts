import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SessionsComponent } from './sessions/sessions.component';
import { PaymentsComponent } from './payments/payments.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { SessionsFormComponent } from './sessions/sessions-form/sessions-form.component';

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
  {
    title: 'Create a New User | Dalpa',
    path: 'users/create',
    component: UsersFormComponent,
  },
  {
    title: 'Sessions | Dalpa',
    path: 'sessions',
    component: SessionsComponent,
  },
  {
    title: 'Create a New Session | Dalpa',
    path: 'sessions/create',
    component: SessionsFormComponent,
  },
  {
    title: 'Payments | Dalpa',
    path: 'payments',
    component: PaymentsComponent,
  },
];
