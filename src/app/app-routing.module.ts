import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionComponent } from './Regions/region/region.component';
import { AddRegionComponent } from './Regions/add-region/add-region.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditRegionComponent } from './Regions/edit-region/edit-region.component';
import { RegionResolverService } from './data/RegionResolver';
import { CountriesComponent } from './contries/countries/countries.component';
import { AddCountryComponent } from './contries/add-country/add-country.component';
import { EditCountryComponent } from './contries/edit-country/edit-country.component';
import { LocationsComponent } from './locations/locations/locations.component';
import { AddLocationComponent } from './locations/add-location/add-location.component';
import { EditLocationComponent } from './locations/edit-location/edit-location.component';
import { JobsComponent } from './jobs/jobs/jobs.component';
import { AddJobComponent } from './jobs/add-job/add-job.component';
import { EditJobComponent } from './jobs/edit-job/edit-job.component';
import { DepartmentsComponent } from './departments/departments/departments.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { PractiseFormsComponent } from './practise-forms/practise-forms.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { ParentComponent } from './communication-component/parent/parent.component';

const routes: Routes = [
  {path:'',component:RegionComponent},
  {path:'regions',component:RegionComponent,resolve : {resolvedRegion:RegionResolverService}},
  {path:'regions/addRegion',component:AddRegionComponent},
  { path:  'regions/:id', component:  EditRegionComponent},
  {path :'countries' ,component :CountriesComponent},
  {path :'countries/addCountry' ,component :AddCountryComponent},
  {path :'countries/:id' ,component :EditCountryComponent},
  {path:'locations' ,component:LocationsComponent},
  {path:'locations/addLocation',component:AddLocationComponent},
  {path:'locations/:id' ,component:EditLocationComponent},
  {path:'jobs',component:JobsComponent},
  {path:'jobs/addJob',component:AddJobComponent},
  {path:'jobs/:id' ,component:EditJobComponent},
  {path:'departments' ,component:DepartmentsComponent},
  {path:'departments/addDepartment',component:AddDepartmentComponent},
  {path:'departments/:id' ,component:EditDepartmentComponent},
  {path:'employees' ,component:EmployeeComponent},
  {path:'employees/addEmployee' ,component:AddEmployeeComponent},
  {path:'employees/:id' ,component:EditEmployeeComponent},
  {path:'practise-forms' ,component:PractiseFormsComponent},
  {path:'parent' ,component:ParentComponent},

  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],







exports: [RouterModule]
})
export class AppRoutingModule { }
