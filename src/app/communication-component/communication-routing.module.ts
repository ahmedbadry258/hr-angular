import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Ch1Component } from './ch1/ch1.component';
import { Ch2Component } from './ch2/ch2.component';





const routes: Routes = [
    {path:'ch1' ,component :Ch1Component},

    {path :'ch2' ,component :Ch2Component},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

exports: [RouterModule]
})
export class CommunicationRoutingModule { }
