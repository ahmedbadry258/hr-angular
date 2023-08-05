import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeResolver } from './employee-resolver.service';
import { EmployeeBasicInfoComponent } from './employee-basic-info/employee-basic-info.component';
import { EmployeeCompanyInfoComponent } from './employee-company-info/employee-company-info.component';
import { EditEmployeeBasicInfoComponent } from './edit-employee-basic-info/edit-employee-basic-info.component';
import { EditEmployeeCompanyInfoComponent } from './edit-employee-company-info/edit-employee-company-info.component';
import { EditEmployeeGuard } from './edit-employee/edit-employee.guard';



const routes: Routes = [
    {path:'' ,component :EmployeeComponent},
    {path:'addEmployee' ,component:AddEmployeeComponent,
    children:[
      {path:'',redirectTo:'info',pathMatch:'full'},
      {path:'info',component:EmployeeBasicInfoComponent},
      {path:'company',component:EmployeeCompanyInfoComponent}
  ]},

    {path:':id' ,component:EmployeeDetailsComponent,resolve:{employee:EmployeeResolver}},
    {path:':id/edit' ,component:EditEmployeeComponent,
    canDeactivate:[EditEmployeeGuard],
    resolve:{employee:EmployeeResolver},
    children:[
      {path:'',redirectTo:'basic-info',pathMatch:'full'},
      {path:'basic-info',component:EditEmployeeBasicInfoComponent},
      {path:'company-info',component:EditEmployeeCompanyInfoComponent},
    ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
