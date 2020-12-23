import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CustomerDueReportComponent } from './customer-due-report.component';

describe('CustomerDueReportComponent', () => {
  let component: CustomerDueReportComponent;
  let fixture: ComponentFixture<CustomerDueReportComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerDueReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDueReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
