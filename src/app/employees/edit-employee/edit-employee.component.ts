import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { Employee } from './../../data/Employee';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
empId=0
editEmployeeForm:FormGroup;
employee:Employee;
  constructor(private activatedRoute:ActivatedRoute,private fb : FormBuilder,
    private datService:DataService){
      this.employee={
        employeeId: 0,
        firstName: "",
        lastName:  "",
        email:  "",
        phoneNumber: "",
        hireDate: "",
        salary: "",
        commissionPct:0,
        managerId: 0,
        department:{  departmentId:0,
          departmentName:"",
          managerId:0,
          location:{ locationId:0,
            streetAddress :"",
            postalCode:"",
            city:"",
            stateProvince :"",
            country:{countryId:"",
              countryName:"",
              region: {  regionId:0,
                regionName:""}}}
        },
        job:{ jobId :"",

          jobTitle :"",
      
          minSalary :0,
      
          maxSalary :0}
      }
this.editEmployeeForm=this.fb.group({
  employeeId: ['',Validators.required],
  firstName:  ['',[Validators.required,Validators.minLength(3)]],
  lastName:   ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
  email:   ['',[Validators.required,Validators.email]],
  phoneNumber:  ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
  hireDate:  [''],
  salary: ['',[Validators.required]],
  commissionPct: ['',[Validators.required]],
  managerId:  ['',[Validators.required]],
  department: ['',[Validators.required]],
  job: ['',[Validators.required]],
})
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
params => this.empId=params["id"] )
this.datService.findEmployeeById(this.empId).subscribe(
  (data:Employee)=>{this.employee=data;console.log(data),this.getData(data);},
  (error:Error)=>console.log(error.message)
)

  }
  saveUpdate(){

  }
  getData(emp:Employee){
   console.log(this.employee.firstName)
    this.editEmployeeForm.patchValue({
       employeeId:this.employee.employeeId,
       firstName:this.employee.firstName,
       lastName: this.employee.lastName ,
       email:  this.employee.email ,
       phoneNumber: this.employee.phoneNumber,
       hireDate: this.employee.hireDate,
       salary:this.employee.salary ,
       commissionPct:this.employee.commissionPct,
       managerId:this.employee.managerId ,
       department:this.employee.department.departmentName,
       job: this.employee.job.jobTitle,
    })
  }
}
