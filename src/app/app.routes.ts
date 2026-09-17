import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { JobDetails } from './pages/job-details/job-details';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'job-details/:id',
    component: JobDetails
  }

];