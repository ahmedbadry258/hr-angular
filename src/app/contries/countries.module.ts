import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesRoutingModule } from './countries-routing.module';
import { FormsModule } from '@angular/forms';
import { CountriesComponent } from './countries/countries.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { EditCountryComponent } from './edit-country/edit-country.component';



@NgModule({
  declarations: [  CountriesComponent,
    AddCountryComponent,
    EditCountryComponent],
  imports: [
    CommonModule,CountriesRoutingModule,FormsModule
  ]
})
export class CountriesModule { }
