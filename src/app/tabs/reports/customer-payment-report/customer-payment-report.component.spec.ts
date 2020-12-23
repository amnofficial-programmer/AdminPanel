import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomerPaymentReportComponent } from './customer-payment-report.component';

describe('CustomerPaymentReportComponent', () => {
  let component: CustomerPaymentReportComponent;
  let fixture: ComponentFixture<CustomerPaymentReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPaymentReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPaymentReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
