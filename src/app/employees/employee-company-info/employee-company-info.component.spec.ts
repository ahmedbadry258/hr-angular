import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCompanyInfoComponent } from './employee-company-info.component';

describe('EmployeeCompanyInfoComponent', () => {
  let component: EmployeeCompanyInfoComponent;
  let fixture: ComponentFixture<EmployeeCompanyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCompanyInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
