import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/data/Country';
import { Region } from 'src/app/data/Region';
import { DataService } from 'src/app/services/data.service';
import { Error } from './../../data/Error';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit{
country :Country;
regions :Region[];
  constructor(private route:ActivatedRoute,private dataService:DataService,private router :Router){
this.country={
  countryId:"",countryName:"",region:{
    regionId:0,regionName:""
  }
}
this.regions=[];
  }
  ngOnInit(): void {
this.route.params.subscribe(
  params => this.country.countryId=params['id']
)
this.dataService.findCountryById(this.country.countryId).subscribe(
  (data :Country)=> this.country=data,
  (err:Error) => console.log(err),
  ()=>console.log("find Country to edit")
)

this.dataService.findAllRegions().subscribe(
  (data : Region[]|Error) =>this.regions=<Region[]> data,
  (err :Error) =>console.log(err),
  ()=>console.log("get All Region To Select")
);

  }
  onSubmit(){
    this.dataService.findRegion(this.country.region.regionId).subscribe(
      (data : Region) => this.country.region =data,
      (err :Error) => console.log(err)
    )
    this.dataService.updateCountry(this.country).subscribe(
      (data :Country) =>{alert(`edit successfully ${this.country.countryName}`)
      console.log(`region id ${this.country.region.regionId}`)
      this.router.navigate(['/countries'])},
      (err :Error) =>console.log(err)
    )
    console.log("submit")
  }
  onChange(){
console.log(`region id ${this.country.region.regionId}`)
  }

}
