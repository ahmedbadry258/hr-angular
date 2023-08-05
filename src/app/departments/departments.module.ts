import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments/departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DepartmentsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,],
  imports: [
    CommonModule,DepartmentsRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class DepartmentsModule { }
