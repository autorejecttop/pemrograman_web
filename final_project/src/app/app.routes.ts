import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  {
    title: 'Home | Mr. AI',
    path: '',
    component: HomeComponent,
  },
  {
    title: 'About | Mr. AI',
    path: 'about',
    component: AboutComponent,
  },
  {
    title: 'Contact | Mr. AI',
    path: 'contact',
    component: ContactComponent,
  },
];
