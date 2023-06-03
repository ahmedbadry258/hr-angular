import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/data/Country';
import { Error } from 'src/app/data/Error';
import { Location } from 'src/app/data/Location';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit{
  location :Location;
  countryList:Country[];
  constructor(private dataService:DataService,private activatedRoute :ActivatedRoute,
              private router:Router){
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
    this.activatedRoute.params.subscribe(
    (params)=>  this.location.locationId=params['id']
    )
    this.dataService.findLocationById(this.location.locationId).subscribe(
      (data : Location) =>this.location=data,
      (err :Error) =>console.log(err)
    )
    console.log(`id ${this.location.locationId}`)
    this.dataService.findAllCountries().subscribe(
      (data : Country[] |Error) => this.countryList=<Country[]> data,
      (err:Error) =>console.log(err)
    )
  }
  onSubmit(){
    this.dataService.findCountryById(this.location.country.countryId).subscribe(
      (data : Country) =>this.location.country=data,
      (err:Error) =>console.log(err)
    )
    this.dataService.editLocation(this.location).subscribe(
      (data :Location) => {alert(`Location updated successfully`),
      this.router.navigate(['/locations'])
    },
      (err :Error ) =>console.log(err)
    )
  }
}
