import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'today',
    loadComponent: () =>
      import('./pages/apod/apod.component').then((m) => m.ApodComponent),
  },
];
