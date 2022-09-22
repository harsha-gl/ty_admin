import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDetailesComponent } from './address-detailes.component';

describe('AddressDetailesComponent', () => {
  let component: AddressDetailesComponent;
  let fixture: ComponentFixture<AddressDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
