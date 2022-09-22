import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorsRoutingModule } from './mentors-routing.module';
import { MentorsComponent } from './mentors.component';
import { MHeaderComponent } from './m-header/m-header.component';
import { MSidenavComponent } from './m-sidenav/m-sidenav.component';
import { SharedModule } from '../shared/shared.module';
import { MDashboardComponent } from './m-dashboard/m-dashboard.component';
import { MBatchComponent } from './m-batch/m-batch.component';
import { EmplistComponent } from './emplist/emplist.component';

@NgModule({
  declarations: [MentorsComponent, MHeaderComponent, MSidenavComponent, MDashboardComponent, MBatchComponent, EmplistComponent],
  imports: [CommonModule, MentorsRoutingModule, SharedModule],
})
export class MentorsModule {}
