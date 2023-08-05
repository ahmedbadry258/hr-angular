import { ChangeDetectorRef, Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';


import { DataService } from '../../services/data.service';

import { Employee } from './../../data/Employee';
import { CriteriaComponent } from '../criteria/criteria.component';
import { EmployeeParametersService } from './../employee-parameters.service';
import { EmployeeService } from '../employee.service';


import Drilldown from 'highcharts/modules/drilldown';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
 // providers:[EmployeeParametersService] //==> here the service is register in this component only
})
export class EmployeeComponent implements OnInit,AfterViewInit{
  employees:Employee[];
  filteredEmployees: Employee[]=[];

  displayDetails:boolean =true

  page: number = 0;

  pages!: Array<number>;
  noOfItmes: number = 10;
  items: number[] = [5, 10, 15];
  name:string='Line 1';
  dataChart:number[]=[];
  @ViewChild(CriteriaComponent)filterComponent!:CriteriaComponent;
parentListFilter:string='';
// private _listFilter: string = '';
//   get listFilter(): string {
//     return this._listFilter;
//   }
//   set listFilter(value: string) {
//     this._listFilter = value;
//     console.log('In setter:', value);

//   }
get showImage():boolean{
  return this.employeeParametersService.showImage;
}
set showImage(value:boolean){
  this.employeeParametersService.showImage=value
}
  constructor(private dataService:DataService,
              private employeeParametersService:EmployeeParametersService,
              private employeeService:EmployeeService ,
              private route :ActivatedRoute,
              private spinner: NgxSpinnerService){
    this.employees=[];
    const employeeName=this.route.snapshot.paramMap.get('employeeName');
const email=this.route.snapshot.paramMap.get('email')
console.log(`email ${email}`)
console.log(`employee Name ${employeeName}`)
  }

  ngOnInit(): void {
    this.spinner.show();
this.getAllEmployeesPagination();
this.spinner.hide();
  }
  ngAfterViewInit(): void {
    this.parentListFilter=this.filterComponent.listFilter;
    console.log(this.parentListFilter)
      }
  getAllEmployeesPagination(){
  this.employeeService.findAllEmployeesPagination(this.page,this.noOfItmes).subscribe(
    (data :any|Error) =>{this.employees=<any[]> data['content'],
    this.pages=this.findPages(data['totalPages'])
      this.filteredEmployees=this.employees,
      this.filterComponent.listFilter=this.employeeParametersService.filterBy;

    console.log(this.dataService)
    },
    (err :Error) =>console.log(err)
  )
}

toggleImage(){
  this.showImage=!this.showImage;
}
toggleDetailsFilter(){
  this.displayDetails=!this.displayDetails
}
 randomIntFromInterval(min:number, max:number) { // min and max included
  // return Math.floor(Math.random() * (max - min + 1) + min)
  return 1;
}
onValueChanges(value:string){
 this.employeeParametersService.filterBy=value
  this.performFilter(value);
    }
 //rndNumImg =this. randomIntFromInterval(1, 10)
//console.log(rndInt)
performFilter(filterBy?: string): void {
  if (filterBy) {
      this.filteredEmployees = this.employees.filter((employee: Employee) =>
      employee.firstName.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
  } else {
      this.filteredEmployees = this.employees;
  }
}
findPages(totalPages: number): number[] {
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}
setPage(i: number, event: any) {
  (this.page = i), this.getAllEmployeesPagination();
}
setItems() {
  (this.page = 0), this.getAllEmployeesPagination();
}




}

