import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../data/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService implements OnInit,OnDestroy {
//private  URL:string="http://localhost:8080/hr";
private  URL:string="http://localhost:8090";
constructor(private http:HttpClient) {
  console.log("EmployeeService Created")
}
  ngOnInit(): void {
    console.log("EmployeeService init")
  }
ngOnDestroy(): void {
  console.log("EmployeeService Destroy")
   }

   // start employees service
 findAllEmployees() : Observable<Employee[]>{
   return this.http.get<Employee[]>(`${this.URL}/employees`)
 }
 findAllEmployeesPagination(page:number,items:number) : Observable<any>{
  return this.http.get<any>(`${this.URL}/employees/list?page=${page}&items=${items}`)
}
 findEmployeeById(employeeId:number) : Observable<Employee>{
   return this.http.get<Employee>(`${this.URL}/employees/${employeeId}`)
 }
 saveEmployee(employee:Employee) : Observable<Employee>{
   return this.http.post<Employee>(`${this.URL}/employees`,employee)
 }

 editEmployee(employee:Employee) : Observable<Employee>{
   return this.http.put<Employee>(`${this.URL}/employees/edit`,employee)
 }
}
