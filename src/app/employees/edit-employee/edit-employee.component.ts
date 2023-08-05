import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { Employee } from './../../data/Employee';
import { EmployeeParametersService } from '../employee-parameters.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  empId = 0;
  editEmployeeForm: FormGroup;
  //employeeEdit: Employee;

  private currentEmployee: Employee = this.initObject();
  private originalEmployee: Employee = this.initObject();
  private dataIsValid: { [key: string]: boolean } = {};

  get employee(): Employee {
    return this.currentEmployee;
   // return this.employeeEdit;
  }
  setEmployee(value: Employee) {
    this.currentEmployee = value;
    this.originalEmployee = { ...value };
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private datService: DataService,
    private employeeParametersService: EmployeeParametersService,
    private employeeService: EmployeeService
  ) {
    this.currentEmployee = this.initObject();
    this.editEmployeeForm = this.fb.group({
      employeeId: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
        ],
      ],
      hireDate: [''],
      salary: ['', [Validators.required]],
      commissionPct: ['', [Validators.required]],
      managerId: ['', [Validators.required]],
      department: ['', [Validators.required]],
      job: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    //  console.log(this.activatedRoute.data)
    // console.log(this.activatedRoute.snapshot.data['employee'])

    this.setEmployee(this.activatedRoute.snapshot.data['employee'])
    this.getData(this.currentEmployee);
    //     this.activatedRoute.params.subscribe(
    // params => this.empId=params["id"] )
    // this.employeeService.findEmployeeById(this.empId).subscribe(
    //   (data:Employee)=>{this.employee=data;console.log(data),this.getData(data);},
    //   (error:Error)=>console.log(error.message)
    // )
  }
  saveUpdate() {
    this.currentEmployee = this.editEmployeeForm.value;
    this.employeeService.editEmployee(this.currentEmployee).subscribe(
      (data: Employee) => {
        alert('edit successfully');
        this.reset();
      },
      (error: Error) => console.log(error.message)
    );
  }
  getData(emp: Employee) {
    console.log(emp.firstName);
    this.editEmployeeForm.patchValue({
      employeeId: emp.employeeId,
      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
      phoneNumber:emp.phoneNumber,
      hireDate: emp.hireDate,
      salary: emp.salary,
      commissionPct: emp.commissionPct,
      managerId: emp.managerId,
      department: emp.department.departmentName,
      job: emp.job.jobTitle,
    });
  }
  get isDirty(): boolean {
    console.log(this.currentEmployee)
    console.log(this.originalEmployee)
    return (
      JSON.stringify(this.originalEmployee) !== JSON.stringify(this.currentEmployee)
    );
  }
  reset(): void {
    this.dataIsValid = {};
    this.currentEmployee = this.initObject();
    this.originalEmployee = this.initObject();
  }

  initObject() {
    return {
      employeeId: 0,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      hireDate: '',
      salary: '',
      commissionPct: 0,
      managerId: 0,
      department: {
        departmentId: 0,
        departmentName: '',
        managerId: 0,
        location: {
          locationId: 0,
          streetAddress: '',
          postalCode: '',
          city: '',
          stateProvince: '',
          country: {
            countryId: '',
            countryName: '',
            region: { regionId: 0, regionName: '' },
          },
        },
      },
      job: {
        jobId: '',

        jobTitle: '',

        minSalary: 0,

        maxSalary: 0,
      },
    };
  }
}
