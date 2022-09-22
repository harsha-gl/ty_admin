import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmplistComponent } from './emplist/emplist.component';
import { MBatchComponent } from './m-batch/m-batch.component';
import { MDashboardComponent } from './m-dashboard/m-dashboard.component';
import { MHeaderComponent } from './m-header/m-header.component';
import { MSidenavComponent } from './m-sidenav/m-sidenav.component';
import { MentorsComponent } from './mentors.component';

const routes: Routes = [
  {
    path: '',
    component: MentorsComponent,
    children: [
      {
        path: 'msidenav',
        component: MSidenavComponent,
      },
      {
        path: 'mheader',
        component: MHeaderComponent,
      },
      {
        path: 'mbatch',
        component: MBatchComponent,
      },
      {
        path: 'mdashboard',
        component: MDashboardComponent,
      },
      {
        path: 'emplist',
        component: EmplistComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorsRoutingModule {}
