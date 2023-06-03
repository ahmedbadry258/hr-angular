import { Component, OnInit } from '@angular/core';
import { Location } from './../../data/Location';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from  './../../data/Country';
import { Error } from  './../../data/Error';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {
  location :Location;
  countryList:Country[];
constructor(private dataService:DataService,private router :Router){
  this.location={
    locationId:0,
    streetAddress :"",
    postalCode:"" ,
    city:"" ,
    stateProvince :"",
    country :{
      countryId:"",
      countryName:"",region:{
        regionId:0,regionName:""
      }
    }
  }
  this.countryList=[];
}
  ngOnInit(): void {
this.dataService.findAllCountries().subscribe(
  (data : Country[] |Error) => this.countryList=<Country[]> data,
  (err:Error) =>console.log(err)
)
  }
  onSubmit(){
    console.log(`address ${this.location.country.countryId}`)
    this.dataService.findCountryById(this.location.country.countryId).subscribe(
      (data : Country) =>this.location.country=data,
      (err:Error) =>console.log(err)
    )
    this.dataService.addLocation(this.location).subscribe(
      (data :Location) =>{alert(`add successfully with id ${data.locationId}`)
    this.router.navigate(['/locations'])},
      (err :Error) =>console.log(err)
    )
  }
}
