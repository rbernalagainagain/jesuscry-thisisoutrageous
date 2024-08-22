import { Routes } from '@angular/router'
import LandingPage from './feature/landing/landing.page'

export default [
  {
    path: '',
    component: LandingPage,
  },
  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full',
  // },
] as Routes
