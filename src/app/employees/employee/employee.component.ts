import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';


import { DataService } from '../../services/data.service';

import { Employee } from './../../data/Employee';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  employees:Employee[];
  filteredEmployees: Employee[]=[];
  showImage:boolean=true;
  displayDetails:boolean =false

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredEmployees = this.performFilter(value);
  }
  constructor(private dataService:DataService){
    this.employees=[];
  }
  ngOnInit(): void {
this.findAllEmployees();
  }
findAllEmployees(){
  this.dataService.findAllEmployees().subscribe(
    (data :Employee[]|Error) =>{this.employees=<Employee[]> data,
      this.filteredEmployees=this.employees
    console.log(this.dataService)},
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
   return Math.floor(Math.random() * (max - min + 1) + min)
 // return 1;
}

 //rndNumImg =this. randomIntFromInterval(1, 10)
//console.log(rndInt)
performFilter(filterBy: string): Employee[] {
  if(filterBy){
  filterBy=filterBy.toLocaleLowerCase();
  return this.filteredEmployees.filter((product: Employee) =>
    product.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }else{
    return  this.filteredEmployees=this.employees;
  }
}


}
