import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes,RouterModule } from '@angular/router';

import { RegionComponent } from './Regions/region/region.component';
import { AddRegionComponent } from './Regions/add-region/add-region.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditRegionComponent } from './Regions/edit-region/edit-region.component';
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
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { CacheInterceptor } from './core/cache.interceptor';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EmployeeTemplateComponent } from './employee-template/employee-template.component';
import { PractiseFormsComponent } from './practise-forms/practise-forms.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { ParentComponent } from './communication-component/parent/parent.component';
import { CriteriaComponent } from './employees/criteria/criteria.component';


@NgModule({
    declarations: [
        AppComponent,
        EmployeeComponent,
        RegionComponent,
        AddRegionComponent,
        NavBarComponent,
        NotFoundComponent,
        EditRegionComponent,
        CountriesComponent,
        AddCountryComponent,
        EditCountryComponent,
        LocationsComponent,
        AddLocationComponent,
        EditLocationComponent,
        JobsComponent,
        AddJobComponent,
        EditJobComponent,
        DepartmentsComponent,
        AddDepartmentComponent,
        EditDepartmentComponent,
        AddEmployeeComponent,
        EmployeeTemplateComponent,
        PractiseFormsComponent,
        EditEmployeeComponent,
        ParentComponent,
        CriteriaComponent,

    ],
    providers: [
      // {provide: HTTP_INTERCEPTORS,useClass:CacheInterceptor,multi:true}
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule, HttpClientModule,
         BrowserAnimationsModule, FormsModule,ReactiveFormsModule,
         ToastNoAnimationModule.forRoot(),

    ]
})
export class AppModule { }
