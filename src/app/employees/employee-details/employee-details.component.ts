import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/data/Employee';
import { DataService } from 'src/app/services/data.service';
import { EmployeeParametersService } from '../employee-parameters.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee!:Employee;
  empId:number=0;
  constructor(private activatedRoute:ActivatedRoute ,
    private datService:DataService,private employeeParametersService:EmployeeParametersService,private employeeService:EmployeeService,
    private router:Router){

  }
  ngOnInit(): void {
    console.log(``,this.activatedRoute.snapshot.data)
    this.employee= this.activatedRoute.snapshot.data['employee'];
    // this.activatedRoute.params.subscribe(
    //   params => this.empId=params["id"] )
    //   this.employeeService.findEmployeeById(this.empId).subscribe(
    //     (data:Employee)=>{this.employee=data;
    //       console.log(data)},
    //     (error:Error)=>console.log(error.message)
    //   )
  }
  onBack(): void {
    this.router.navigate(['/employees'],{queryParamsHandling:'preserve'});
}

}
