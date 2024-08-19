import { Routes } from '@angular/router'

export default [
  {
    path: 'dashboard',
    loadComponent: () => import('./feature/dashboard/layout.component').then(({ default: dashboard }) => dashboard),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
] as Routes
