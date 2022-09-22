import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBatchComponent } from './m-batch.component';

describe('MBatchComponent', () => {
  let component: MBatchComponent;
  let fixture: ComponentFixture<MBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
