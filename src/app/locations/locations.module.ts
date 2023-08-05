import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsRoutingModule } from './locations-routing.module';
import { FormsModule } from '@angular/forms';
import { LocationsComponent } from './locations/locations.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';



@NgModule({
  declarations: [  LocationsComponent,
    AddLocationComponent,
    EditLocationComponent,],
  imports: [
    CommonModule,LocationsRoutingModule,FormsModule
  ]
})
export class LocationsModule { }
