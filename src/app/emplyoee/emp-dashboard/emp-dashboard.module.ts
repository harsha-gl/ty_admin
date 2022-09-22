import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpDashboardRoutingModule } from './emp-dashboard-routing.module';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpSivdenavComponent } from './emp-sivdenav/emp-sivdenav.component';
import { EmpHeaderComponent } from './emp-header/emp-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EmpDetailesComponent } from './emp-detailes/emp-detailes.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    EmpDashboardComponent,
    EmpSivdenavComponent,
    EmpHeaderComponent,
    EmpDetailesComponent,
    ProfileComponent,
  ],
  imports: [CommonModule, EmpDashboardRoutingModule, SharedModule],
})
export class EmpDashboardModule {}
