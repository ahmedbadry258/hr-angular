import { Component, OnInit } from '@angular/core';
import { Error } from 'src/app/data/Error';
import { Job } from 'src/app/data/Job';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs :Job[];
  constructor(private dataService:DataService){
this.jobs=[];
  }
  ngOnInit(): void {
this.dataService.findAllJob().subscribe(
  (data : Job[] |Error) =>this.jobs=<Job[]>data,
  (err :Error) =>console.log(err)
) }
onClickDelete(id:string){
  let x=  confirm(`are u want delete ${id}`);

  if(x){

     this.dataService.deleteJob("id")
     .subscribe(() =>alert (`Job has been deleted`)
     ,(error:Error) =>console.log(`error ${error.message}`));

  }
}
}
