import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Region } from 'src/app/data/Region';
import { DataService } from 'src/app/services/data.service';

import { Observable } from 'rxjs';
import { Department } from 'src/app/data/Department';
import { Job } from 'src/app/data/Job';
import { Employee } from './../../data/Employee';
import { EmployeeView } from './../../data/modelView/EmployeeView';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { EmployeeParametersService } from '../employee-parameters.service';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent  implements OnInit{
  employeeForm:FormGroup;
  status:string="A";
  active:string="Active"
  regionList :Region[]=[];
  departments:Department[];
  employee:Employee;
  employeeView:EmployeeView=new EmployeeView();
  jobs :Job[];
  person : any={
   firstName:null,
     lastName:null,
     regionId:null
   }
  postError:boolean=false;
  postErrorMessage:string="";
  postSuccess:boolean=false;
  postSuccessMessage:string="";

  constructor(
    private dataService :DataService,
    private employeeParametersService:EmployeeParametersService,
    private employeeService:EmployeeService,
    private toastr: ToastrService,
    private fb :FormBuilder,
    private router:Router){

      this.employeeForm=this.fb.group({
        employeeId: ['',Validators.required],
        firstName:  ['',[Validators.required,Validators.minLength(3)]],
        lastName:   ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
        email:   ['',[Validators.required,Validators.email]],
        phoneNumber:  ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
        hireDate:  [''],
        salary: ['',[Validators.required]],
        commissionPct: ['',[Validators.required]],
        managerId:  ['',[Validators.required]],
        departmentId: ['',[Validators.required]],
        jobId: ['',[Validators.required]],
      })
this.departments=[];
this.jobs=[];

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
  }
  ngOnInit(): void {
    this.regionList=[{regionId:1,regionName:"one"}
  ,{regionId:2,regionName:"two"}
  ,{regionId:3,regionName:"Three"}];
  //this.regionList=this.regionService.regionList();
this.dataService.findAllDepartments().subscribe(
  (data)=>this.departments=<Department[]>data,
  (error:Error)=>console.log(error.message)
);

this.dataService.findAllJob().subscribe(
  (data) =>this.jobs=<Job[]>data,
  (err :Error) =>console.log(err)
)
}
  onBlur(field : NgModel) {
    console.log('in onBlur: ', field.valid);
  }

  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);
    // this.employeeService.saveEmployee(this.person).subscribe(
    //   result =>this.onHttpSuccess(result),
    //   error =>this.onHttpError(error)
    // )
  }
onHttpError(errorResponse :any){
  console.log("error : ",errorResponse);
  this.postError=true;
 this.postErrorMessage=errorResponse.error.message;
 console.log(this.postErrorMessage);

}
onHttpSuccess(resultSuccess:any){
console.log("Success : " ,resultSuccess)
this.postSuccess=true;
this.postSuccessMessage=`successfull ${resultSuccess.id}`;
}

save(){
  console.log('Employee Form');
  console.log(this.employeeForm.value);
  this.employeeView=this.employeeForm.value;
  console.log('Employee View');
  console.log(this.employeeView);
  this.fillData(this.employeeView);
  this.employeeService.saveEmployee(this.employee).subscribe(
    ( data:Employee)=>this.toastr.success('Save Region','Success'),
    ( error:HttpErrorResponse)=>{this.toastr.error(error.error.errorMessage,'Error');
  console.log(error)}
  )
console.log(this.employee.department);
console.log(this.employee.department.departmentId);
console.log(this.employee.department.departmentName);
}

findData(){
  this.employeeForm.patchValue({
    firstName:'Ahmed'
  })
}
fillData(employeeView:EmployeeView){
this.employee.employeeId=employeeView.employeeId;
this.employee.firstName=employeeView.firstName;
this.employee.lastName=employeeView.lastName;
this.employee.salary=employeeView.salary;
this.employee.email=employeeView.email;
this.employee.hireDate=employeeView.hireDate;
this.employee.commissionPct=employeeView.commissionPct;
this.employee.managerId=employeeView.managerId;
this.employee.phoneNumber=employeeView.phoneNumber;
this.dataService.findJobById(employeeView.jobId).subscribe(
  (data:Job)=>this.employee.job=data,
  (error:Error)=>console.log(error.message)
)
this.dataService.findDepartmentById(employeeView.departmentId).subscribe(
  (data:Department)=>this.employee.department=data,
  (error:Error)=>console.log(error.message)
)
}
onBack(){
  this.router.navigateByUrl('/employees')
}
}
