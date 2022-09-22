// import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

// import { MatFormFieldModule } from '@angular/material/form-field/form-field-module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
