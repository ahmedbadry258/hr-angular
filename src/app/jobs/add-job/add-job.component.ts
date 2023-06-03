import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/data/Job';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit{
job:Job;
  constructor(private dataService:DataService,private router :Router){
this.job={
  jobId :"",
	  jobTitle :"",
	  minSalary :0,
	  maxSalary :0
}
  }
  ngOnInit(): void {

  }
  onSubmit(){
    this.dataService.addJob(this.job).subscribe(
      (data :Job) =>{alert (`Job Add Successfully`),
      this.router.navigate(['/jobs'])},
      (err : Error) =>console.log(err)
    )
  }

}
