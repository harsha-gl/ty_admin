import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { BatchComponent } from './batch/batch.component';
import { MentorComponent } from './mentor/mentor.component';
import { RequestComponent } from './request/request.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidenavComponent,
    BatchComponent,
    MentorComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,

  ]
})
export class DashboardModule { }
