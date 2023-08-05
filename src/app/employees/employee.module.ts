import { NgModule, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CriteriaComponent } from './criteria/criteria.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeParametersService } from './employee-parameters.service';
import { ChartModule } from 'angular-highcharts';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeBasicInfoComponent } from './employee-basic-info/employee-basic-info.component';
import { EmployeeCompanyInfoComponent } from './employee-company-info/employee-company-info.component';
import { EditEmployeeCompanyInfoComponent } from './edit-employee-company-info/edit-employee-company-info.component';
import { EditEmployeeBasicInfoComponent } from './edit-employee-basic-info/edit-employee-basic-info.component';



@NgModule({
  imports: [CommonModule      ,
    FormsModule,ReactiveFormsModule,
    EmployeeRoutingModule,ChartModule
  ],
  declarations: [
    EmployeeComponent,
    EmployeeDetailsComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    CriteriaComponent,
    EmployeeSearchComponent,
    EmployeeBasicInfoComponent,
    EmployeeCompanyInfoComponent,
    EditEmployeeCompanyInfoComponent,
    EditEmployeeBasicInfoComponent,
  ],providers:[{provide:EmployeeParametersService}]

})
export class EmployeeModule {

 }
