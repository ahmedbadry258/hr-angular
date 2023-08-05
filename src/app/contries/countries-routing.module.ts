import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { EditCountryComponent } from './edit-country/edit-country.component';
import { AddCountryComponent } from './add-country/add-country.component';





const routes: Routes = [
    {path:'' ,component :CountriesComponent},

    {path :'addCountry' ,component :AddCountryComponent},
    {path :':id' ,component :EditCountryComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class CountriesRoutingModule { }
