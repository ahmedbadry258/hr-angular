import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DepartmentsComponent } from './departments/departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';




const routes: Routes = [
  {path:'' ,component:DepartmentsComponent},
  {path:'addDepartment',component:AddDepartmentComponent},
  {path:':id' ,component:EditDepartmentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
