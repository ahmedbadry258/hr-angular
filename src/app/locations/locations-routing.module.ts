import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LocationsComponent } from './locations/locations.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { EditLocationComponent } from './edit-location/edit-location.component';




const routes: Routes = [
  {path:'' ,component:LocationsComponent},
  {path:'addLocation',component:AddLocationComponent},
  {path:':id' ,component:EditLocationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationsRoutingModule { }
