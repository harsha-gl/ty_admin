import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchComponent } from './batch/batch.component';
import { DashboardComponent } from './dashboard.component';
import { MentorComponent } from './mentor/mentor.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'batch',
        component: BatchComponent,
      },
      { path: 'mentor', component: MentorComponent },
      {
        path: 'request',
        component: RequestComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
