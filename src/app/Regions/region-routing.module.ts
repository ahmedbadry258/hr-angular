import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegionListResolverService } from './RegionListResolver.service';
import { AddRegionComponent } from './add-region/add-region.component';
import { EditRegionComponent } from './edit-region/edit-region.component';
import { RegionComponent } from './region/region.component';
import { RegionResolver } from './region-resolver.service';


const routes: Routes = [
    {path:'' ,component :RegionComponent,resolve : {resolvedRegion:RegionListResolverService}},
    {path:'addRegion',component:AddRegionComponent},
    { path:':id', component:  EditRegionComponent,resolve:{region:RegionResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class RegionsRoutingModule { }
