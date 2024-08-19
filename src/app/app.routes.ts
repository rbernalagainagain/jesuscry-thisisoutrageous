import { Routes } from '@angular/router'
import DashboardLayoutComponent from './feature/dashboard/layout.component'

export default [
  // {
  //   path: 'dashboard',
  //   loadComponent: () => import('./feature/dashboard/layout.component').then(({ default: dashboard }) => dashboard),
  // },
  {
    path: '',
    component: DashboardLayoutComponent,
    // redirectTo: '/dashboard',
    // pathMatch: 'full',
  },
] as Routes
