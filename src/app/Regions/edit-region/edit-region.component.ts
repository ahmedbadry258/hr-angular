import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../../data/Region';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.css']
})
export class EditRegionComponent implements OnInit{
   regionId:number=0;
   region :Region={regionId:0,regionName:""}
constructor(private router:Router,private route: ActivatedRoute,private dataService :DataService){

}
ngOnInit() {
  this.route.params.subscribe(params => {
    this.regionId=params['id']
    this.dataService.findRegion(this.regionId).subscribe(
      (data:Region)=>this.region=data,
      (error:any) => console.log(error));
    console.log(params) //log the entire params object
    console.log(params['id']) //log the value of id
  });

}
onSubmit(){
  this.dataService.updateRegion(this.region).subscribe(()=> alert(`data was updated Region Name is ${this.region.regionName}`),
  (error:any)=>alert(error) )
  this.router.navigate(['/regions'])
}
}
