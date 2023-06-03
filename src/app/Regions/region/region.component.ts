import { Component, OnInit } from '@angular/core';
import { Error } from '../../data/Error';
import { Region } from '../../data/Region';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  ids:number[];
  regionList:Region[];
  region :Region={regionId:0,regionName:""};
  constructor(private dataService :DataService,private route:ActivatedRoute){
    this.regionList=[];
    this.ids=[];
  }
  ngOnInit(): void {
    this.dataService.findAllRegions().subscribe(
      (data :Region[]|Error) => this.regionList=<Region[]>data,
      (error : Error)=>console.log(error),
      ()=>console.log("find All Regions")
    );

  }
  onClickDelete(id :number){

  let x=  confirm(`are u want delete ${id}`);
  if(x){
    this.dataService.deleteRegion(id).subscribe((data:string) =>console.log(`data${data}`),(error:any) =>console.log(`error ${error.errorMessage}`));

  }
  }

}
