import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/data/Country';
import { Error } from 'src/app/data/Error';
import { Region } from 'src/app/data/Region';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit{
  country :Country;
  regions :Region[];
  constructor(private dataService:DataService,private router :Router){
    this.country={
      countryId:"",
      countryName:"",
      region:{
        regionId:0,
        regionName:""
      }
    }
    this.regions=[]

    // this.regions= [
    //   { regionId: 1, regionName: "United States" },
    //   { regionId: 2, regionName: "Australia" },
    //   { regionId: 3, regionName: "Canada" },
    //   { regionId: 4, regionName: "Brazil" },
    //   { regionId: 5, regionName: "England" }
    // ];
  }

  ngOnInit(): void {
    this.dataService.findAllRegions().subscribe(
      (data : Region[]|Error) =>this.regions=<Region[]> data,
      (err :Error) =>console.log(err),
      ()=>console.log("get All Region To Select")
    );
  }
  onSubmit(){
    console.log(`name ${this.country.countryName}`)
    console.log(`region id ${this.country.region.regionId} ${this.country.region.regionName}`)
    let findRegion =this.regions.find(x=>x.regionId== this.country.region.regionId)
    console.log(`filter ${findRegion}`)
    this.dataService.findRegion(this.country.region.regionId).subscribe(
      (data :Region) =>this.country.region= data,
      (err :Error) =>console.log(err)
    )
    this.dataService.addCountry(this.country).subscribe(
      (data : Country) =>{alert(`saved successfull with id ${this.country.countryId}`)
      this.router.navigate(['/countries'])},
      (err :Error) =>console.log(err)
    )

  }
}
