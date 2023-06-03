import { Component, OnInit } from '@angular/core';
import { Department } from './../../data/Department';
import { DataService } from 'src/app/services/data.service';
import { Location } from './../../data/Location';
import { Error } from 'src/app/data/Error';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
  department :Department;
  locationList:Location[]
  constructor(private dataService:DataService){
    this.department={
      departmentId:0,
  departmentName:"",
  managerId:0,
  location:{
    locationId:0,
    streetAddress :"",
    postalCode:"" ,
    city:"" ,
    stateProvince :"",
    country:{ countryId:"",
      countryName:"",
      region:{ regionId:0,
        regionName:""}}
  }
    }

 this.locationList=[];
  }
  ngOnInit(): void {
    this.dataService.findAllLocation().subscribe(
      (data :Location[]|Error) =>this.locationList=<Location[]> data,
      (err :Error) =>console.log(err)
    )
  }
  onSubmit(){
console.log(this.department.location.locationId)
this.dataService.findLocationById(this.department.location.locationId).subscribe(
  (data:Location) => this.department.location= data,
  (err :Error) =>console.log(err)
)
const loc=this.locationList.find(x=>x.locationId ==this.department.location.locationId)
console.log( this.department.location.city)
this.dataService.addDepartment(this.department).subscribe(
  (data :Department) =>alert ('add Successfully'),
  (err:Error) =>console.log(err)
)

  }
}
