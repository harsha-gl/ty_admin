import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailesComponent } from './address-detailes/address-detailes.component';
import { BankDetailesComponent } from './bank-detailes/bank-detailes.component';
import { ContactComponent } from './contact/contact.component';
import { EducationalDetailesComponent } from './educational-detailes/educational-detailes.component';
import { EmplyoeeComponent } from './emplyoee.component';
import { ExperienceComponent } from './experience/experience.component';
import { PrimaryinfoComponent } from './primaryinfo/primaryinfo.component';
import { SecondaryinfoComponent } from './secondaryinfo/secondaryinfo.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';

const routes: Routes = [
  { path: '', component: EmplyoeeComponent },
  { path: 'primary', component: PrimaryinfoComponent },
  { path: 'secondary', component: SecondaryinfoComponent },
  { path: 'educational', component: EducationalDetailesComponent },
  { path: 'address', component: AddressDetailesComponent },
  { path: 'bank', component: BankDetailesComponent },
  { path: 'technical', component: TechnicalSkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'primary', pathMatch: 'full' },
  {
    path: 'emp',
    loadChildren: () =>
      import('./emp-dashboard/emp-dashboard.module').then(
        (m) => m.EmpDashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmplyoeeRoutingModule {}
