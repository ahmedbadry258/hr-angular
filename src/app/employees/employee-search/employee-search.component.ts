import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/data/Employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {
  employee!
  :Employee
  employeeName="Ahmed"
  email="Ahmed@gmail.com";
  phone=""
  fromDate="";
  toDate=""
  constructor(private router:Router){}
  ngOnInit(): void {

  }
  search(){
    console.log("go to employee component")
this.router.navigate(['/employees',
{ employeeName: this.employeeName, email: this.email, phone: this.phone, fromDate: this.fromDate, toDate: this.toDate }
])
  }
}
