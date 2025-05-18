import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { SessionsComponent } from './sessions/sessions.component';
import { PaymentsComponent } from './payments/payments.component';

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
    title: 'Sessions | Dalpa',
    path: 'sessions',
    component: SessionsComponent,
  },
  {
    title: 'Payments | Dalpa',
    path: 'payments',
    component: PaymentsComponent,
  },
];
