import { Component, OnInit } from '@angular/core';
import { Error } from 'src/app/data/Error';
import { DataService } from 'src/app/services/data.service';
import { Location } from '../../data/Location';



@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit{

  locationList :Location[];
  constructor(private dataService:DataService){
    this.locationList=[];
  }
  ngOnInit(): void {
    this.loadData();
  }
  onClickDelete(id: number){
this.dataService.deleteLocation(id).subscribe(
  () => {alert (`Location has been deleted`);},
  (err :Error) => console.log(err)
)
  }
  loadData(){
    this.dataService.findAllLocation().subscribe(
      (data :Location[]|Error) =>this.locationList=<Location[]> data,
      (err :Error) =>console.log(err)
    )
  }
}
