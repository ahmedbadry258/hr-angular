import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PractiseFormsComponent } from './practise-forms/practise-forms.component';
import { ParentComponent } from './communication-component/parent/parent.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './user/login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AuthGuard } from './user/auth.guard';

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},

  {path:'login',component:LoginComponent},
  {path:'dash-board',component:DashBoardComponent},
  {path:'practise-forms' ,component:PractiseFormsComponent},
  {path:'parent' ,component:ParentComponent},
  {path:'employees',canActivate:[AuthGuard],loadChildren:()=>import ('./employees/employee.module').then(m=>m.EmployeeModule)},
  {path:'departments',canActivate:[AuthGuard],loadChildren:()=>import ('./departments/departments.module').then(m=>m.DepartmentsModule)},
  {path:'locations',canActivate:[AuthGuard],loadChildren:()=>import ('./locations/locations.module').then(m=>m.LocationsModule)},
  {path:'jobs',canActivate:[AuthGuard],loadChildren:()=>import ('./jobs/jobs.module').then(m=>m.JobsModule)},
  {path:'regions',canActivate:[AuthGuard],loadChildren:()=>import ('./Regions/regions.module').then(m=>m.RegionsModule)},
  {path:'countries',canActivate:[AuthGuard],loadChildren:()=>import ('./contries/countries.module').then(m=>m.CountriesModule)},
//{path:'user',loadChildren:()=>import ('./contries/countries.module').then(m=>m.CountriesModule)},
{path:'',redirectTo:'welcome',pathMatch:'full'},
{path:'**',component:NotFoundComponent}// mean any something else
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],







exports: [RouterModule]
})
export class AppRoutingModule { }
