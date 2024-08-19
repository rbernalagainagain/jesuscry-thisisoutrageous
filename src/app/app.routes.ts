import { Routes } from '@angular/router'
import DashboardLayoutComponent from './feature/dashboard/layout.component'

export default [
  {
    path: '',
    component: DashboardLayoutComponent,
  },
  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full',
  // },
] as Routes
