import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeBasicInfoComponent } from './edit-employee-basic-info.component';

describe('EditEmployeeBasicInfoComponent', () => {
  let component: EditEmployeeBasicInfoComponent;
  let fixture: ComponentFixture<EditEmployeeBasicInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeeBasicInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeeBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
