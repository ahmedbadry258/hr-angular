import { Component, OnInit } from '@angular/core';
import { Error } from 'src/app/data/Error';
import { DataService } from 'src/app/services/data.service';
import { Country } from './../../data/Country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit{
countries : Country[];
  constructor(private dataService:DataService){
this.countries=[];
  }
  loadData(){
    this.dataService.findAllCountries().subscribe(
      (data :Country[]|Error) =>this.countries=<Country[]> data,
      (error : Error)=> console.log(error),
      ()=>console.log("find All Countries")
    );
  }
  ngOnInit(): void {
    this.loadData();
  }
  onClickDelete(id:string){
    let x=confirm('are u sure ?')
    if(x){
      this.dataService.deleteCountry(id).subscribe(
        (data :string) =>{alert (data) ;this.loadData();},
        (err:Error)=>console.log(err)
      )

    }
  }
}
