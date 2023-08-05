import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../../data/Region';
import { DataService } from '../../services/data.service';
import { ToastrService } from 'ngx-toastr';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.css']
})
export class EditRegionComponent implements OnInit{
   regionId:number=0;
   region :Region={regionId:0,regionName:""}
constructor(private router:Router,private route: ActivatedRoute,
  private dataService :DataService,
  private toastr: ToastrService,
  private regionService:RegionService){

}
ngOnInit() {
 
  this.region= this.route.snapshot.data['region']
  
  // this.route.params.subscribe(params => {
  //   this.regionId=params['id']
  //   this.regionService.findRegion(this.regionId).subscribe(
  //     (data:Region)=>this.region=data,
  //     (error:any) => console.log(error));
  //   console.log(params) //log the entire params object
  //   console.log(params['id']) //log the value of id
  // });

}
onSubmit(){
  this.regionService.updateRegion(this.region).subscribe(()=>
  this.toastr.success(`Region Updated`,'Success'),

  (error:any)=>alert(error) )
  this.router.navigate(['/regions'])
}
}
