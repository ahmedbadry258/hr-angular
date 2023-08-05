import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionsRoutingModule } from './region-routing.module';
import { RegionComponent } from './region/region.component';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegionDetailsComponent } from './region-details/region-details.component';



@NgModule({
  declarations: [RegionComponent,EditRegionComponent,
    AddRegionComponent,
    RegionDetailsComponent],
  imports: [
    CommonModule,RegionsRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class RegionsModule { }
