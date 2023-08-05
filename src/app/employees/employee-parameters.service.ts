import { Injectable,NgModuleRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../data/Employee';
import { HttpClient } from '@angular/common/http';
import { EmployeeModule } from './employee.module';

@Injectable()
export class EmployeeParametersService implements OnDestroy {


showImage:boolean= true;
filterBy:string='';
  constructor(private http:HttpClient,private ngModuleRef: NgModuleRef<EmployeeModule>) {
    console.log("EmployeeParametersService Created")
  }
  ngOnDestroy(): void {
    console.log("EmployeeService Destroy")
     }
// end employees service
}
