import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVendorComponent } from './all-vendor.component';

describe('AllVendorComponent', () => {
  let component: AllVendorComponent;
  let fixture: ComponentFixture<AllVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVendorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
