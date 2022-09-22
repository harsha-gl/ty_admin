import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalDetailesComponent } from './educational-detailes.component';

describe('EducationalDetailesComponent', () => {
  let component: EducationalDetailesComponent;
  let fixture: ComponentFixture<EducationalDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationalDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
