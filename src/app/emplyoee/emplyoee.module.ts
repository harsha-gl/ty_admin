import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmplyoeeRoutingModule } from './emplyoee-routing.module';
import { EmplyoeeComponent } from './emplyoee.component';
import { SharedModule } from '../shared/shared.module';
import { PrimaryinfoComponent } from './primaryinfo/primaryinfo.component';
import { SecondaryinfoComponent } from './secondaryinfo/secondaryinfo.component';
import { EducationalDetailesComponent } from './educational-detailes/educational-detailes.component';
import { AddressDetailesComponent } from './address-detailes/address-detailes.component';
import { BankDetailesComponent } from './bank-detailes/bank-detailes.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ResetComponent } from './reset/reset.component';

@NgModule({
  declarations: [
    EmplyoeeComponent,
    PrimaryinfoComponent,
    SecondaryinfoComponent,
    EducationalDetailesComponent,
    AddressDetailesComponent,
    BankDetailesComponent,
    TechnicalSkillsComponent,
    ExperienceComponent,
    ContactComponent,
    ResetComponent,
  ],
  imports: [CommonModule, EmplyoeeRoutingModule, SharedModule],
})
export class EmplyoeeModule {}
