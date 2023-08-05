import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegionService } from '../region.service';
import { Region } from 'src/app/data/Region';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.css']
})
export class RegionDetailsComponent implements OnInit,OnDestroy {
  constructor(private regionService:RegionService){
    //this.region={regionId:0,regionName:''}
  }
  region!:Region|null;
  sub!:Subscription;
  ngOnInit(): void {
this.sub=this.regionService.selectRegionChanges$.subscribe(
  selectedRegion=>this.region=selectedRegion
)
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
