import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpDetailesComponent } from './emp-detailes/emp-detailes.component';
import { EmpHeaderComponent } from './emp-header/emp-header.component';
import { EmpSivdenavComponent } from './emp-sivdenav/emp-sivdenav.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: EmpDashboardComponent,
    children: [
      {
        path: 'empsidenav',
        component: EmpSivdenavComponent,
      },
      {
        path: 'empheader',
        component: EmpHeaderComponent,
      },
      {
        path: 'empdetailes',
        component: EmpDetailesComponent,
      },
      {
        path: 'empdetailes',
        component: EmpDetailesComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpDashboardRoutingModule {}
