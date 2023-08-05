import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

import { EmployeeTemplateComponent } from './employee-template/employee-template.component';
import { PractiseFormsComponent } from './practise-forms/practise-forms.component';
import { ParentComponent } from './communication-component/parent/parent.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeModule } from './employees/employee.module';
import { RegionsModule } from './Regions/regions.module';
import { CountriesModule } from './contries/countries.module';
import { DepartmentsModule } from './departments/departments.module';
import { LocationsModule } from './locations/locations.module';
import { JobsModule } from './jobs/jobs.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './user/login/login.component';
import { MessageComponent } from './message/message.component';
import { Ch1Component } from './communication-component/ch1/ch1.component';
import { Ch2Component } from './communication-component/ch2/ch2.component';
import { CommunicationModule } from './communication-component/communication.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartModule } from 'angular-highcharts';


import { DashBoardComponent } from './dash-board/dash-board.component';
import { MessageModule } from './message/message.module';
@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        NotFoundComponent,
        EmployeeTemplateComponent,
        PractiseFormsComponent,
        ParentComponent,
        WelcomeComponent,
      LoginComponent,
      Ch1Component,
      Ch2Component,

      DashBoardComponent,

    ],
    providers: [
      // {provide: HTTP_INTERCEPTORS,useClass:CacheInterceptor,multi:true}

    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule, HttpClientModule,
         BrowserAnimationsModule, FormsModule,ReactiveFormsModule,
         ToastNoAnimationModule.forRoot(),EmployeeModule,
         RegionsModule,CountriesModule, DepartmentsModule,
          LocationsModule, JobsModule, UserModule, CommunicationModule, ChartModule,
          BrowserAnimationsModule,NgxSpinnerModule.forRoot({ type: 'timer' }),MessageModule

    ]
})
export class AppModule { }
