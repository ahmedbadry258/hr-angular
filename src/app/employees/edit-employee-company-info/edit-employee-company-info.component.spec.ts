import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeCompanyInfoComponent } from './edit-employee-company-info.component';

describe('EditEmployeeCompanyInfoComponent', () => {
  let component: EditEmployeeCompanyInfoComponent;
  let fixture: ComponentFixture<EditEmployeeCompanyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeCompanyInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeCompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
