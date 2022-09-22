import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'emplyoee',
    loadChildren: () =>
      import('./emplyoee/emplyoee.module').then((m) => m.EmplyoeeModule),
  },
  {
    path: 'mentors',
    loadChildren: () =>
      import('./mentors/mentors.module').then((m) => m.MentorsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
