import { Component, OnInit } from '@angular/core';
import { Department } from './../../data/Department';
import { DataService } from 'src/app/services/data.service';
import { Error } from 'src/app/data/Error';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit{
  departmentList:Department[];
constructor(private dataService:DataService){
  this.departmentList=[];
}
  ngOnInit(): void {
this.dataService.findAllDepartments().subscribe(
  (data: Department[]|Error) =>this.departmentList=<Department[]>data,
  (err :Error) =>console.log(err)
)
  }
  onClickDelete(id:number){}

}
