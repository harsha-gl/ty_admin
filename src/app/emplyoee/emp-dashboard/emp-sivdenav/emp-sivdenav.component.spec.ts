import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSivdenavComponent } from './emp-sivdenav.component';

describe('EmpSivdenavComponent', () => {
  let component: EmpSivdenavComponent;
  let fixture: ComponentFixture<EmpSivdenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSivdenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSivdenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
