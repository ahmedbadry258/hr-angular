import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/data/Job';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Error } from 'src/app/data/Error';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  job :Job;

  constructor(private dataService:DataService ,private activatedRoute :ActivatedRoute,private router:Router){
    this.job={
      jobId :"",
      jobTitle :"",
      minSalary :0,
      maxSalary :0
    }
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params =>this.job.jobId=params["id"]
    )
    this.dataService.findJobById(this.job.jobId).subscribe(
      (data : Job) =>this.job=data,
      (err :Error) =>console.log(err)
    )
  }
  onSubmit(){
    this.dataService.editJob(this.job).subscribe(
      (data :Job) =>{alert (`Job Edit Successfully`),
      this.router.navigate(['/jobs'])},
      (err : Error) =>console.log(err)
    )
  }
}
