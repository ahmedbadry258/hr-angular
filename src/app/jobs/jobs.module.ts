import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing.module';
import { FormsModule } from '@angular/forms';
import { JobsComponent } from './jobs/jobs.component';
import { AddJobComponent } from './add-job/add-job.component';
import { EditJobComponent } from './edit-job/edit-job.component';



@NgModule({
  declarations: [
    JobsComponent,
    AddJobComponent,
    EditJobComponent,],
  imports: [
    CommonModule,JobsRoutingModule,FormsModule
  ]
})
export class JobsModule { }
