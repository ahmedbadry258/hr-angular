import { Component, OnInit } from '@angular/core';
import { Region } from '../../data/Region';
import { DataService } from '../../services/data.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {
  region:Region={
    regionId:0,regionName:""
  }
  regionForm:FormGroup;
  constructor(private dataService :DataService,private toastr: ToastrService,
    private fb :FormBuilder){

      this.regionForm=this.fb.group({
        regionId:[null,Validators.required],
        regionName:['',Validators.required]
      })

  }
  ngOnInit(): void {
    this.toastr.success('everything is broken', 'Major Error');
    this.toastr.error('everything is broken', 'Major Error');
    this.toastr.warning('everything is broken', 'Major Error');
    this.toastr.info('everything is broken', 'Major Error');
    this.toastr.show('everything is broken', 'Major Error');
  }

  onSubmit(){

    console.log(this.region)
    this.dataService.addRegion(this.region).subscribe(
      (reg :Region) =>{ this.toastr.success(`Saved Successfull with Id${reg.regionId} `, 'Success');},
      (error :Error) =>this.toastr.error(error.message, error.name)
    )
    console.log("call submit func")
  }
  save(){
this.region=this.regionForm.value
this.dataService.addRegion(this.region).subscribe(
 ( data:Region)=>this.toastr.success('Save Region','Success'),
 ( error:Error)=>this.toastr.error(error.message,'Error')
)
  }
}
