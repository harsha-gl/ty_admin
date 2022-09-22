import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpDetailesComponent } from './emp-detailes.component';

describe('EmpDetailesComponent', () => {
  let component: EmpDetailesComponent;
  let fixture: ComponentFixture<EmpDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
