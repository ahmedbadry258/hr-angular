import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { JobsComponent } from './jobs/jobs.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';




const routes: Routes = [
  {path:'',component:JobsComponent},
  {path:'addJob',component:AddJobComponent},
  {path:':id' ,component:EditJobComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
