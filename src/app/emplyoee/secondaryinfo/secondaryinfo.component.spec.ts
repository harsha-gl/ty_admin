import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryinfoComponent } from './secondaryinfo.component';

describe('SecondaryinfoComponent', () => {
  let component: SecondaryinfoComponent;
  let fixture: ComponentFixture<SecondaryinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
