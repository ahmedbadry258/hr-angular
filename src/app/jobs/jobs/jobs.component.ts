import { Component, OnInit } from '@angular/core';
import { Error } from 'src/app/data/Error';
import { Job } from 'src/app/data/Job';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobs: Job[];
  page: number = 0;
  jobList: Array<any> = [];
  pages!: Array<number>;
  noOfItmes: number = 5;
  items: number[] = [5, 10, 15];
  constructor(private dataService: DataService) {
    this.jobs = [];
  }
  ngOnInit(): void {
    this.dataService.findAllJob().subscribe(
      (data: Job[] | Error) => (this.jobs = <Job[]>data),
      (err: Error) => console.log(err)
    );
    this.findJobsWithPagination();
  }
  onClickDelete(id: string) {
    let x = confirm(`are u want delete ${id}`);
    if (x) {
      this.dataService.deleteJob('id').subscribe(
        () => alert(`Job has been deleted`),
        (error: Error) => console.log(`error ${error.message}`)
      );
    }
  }
  findJobsWithPagination() {
    this.dataService
      .findJobsWithPagination(this.page, this.noOfItmes)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.jobList = data['content'];
          this.pages = this.findPages(data['totalPages']);
          console.log(this.jobList);
          console.log(this.pages);
        },

        (error: Error) => {
          console.log(error.message);
        }
      );
  }
  findPages(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  setPage(i: number, event: any) {
    (this.page = i), this.findJobsWithPagination();
  }
  setItems() {
    (this.page = 0), this.findJobsWithPagination();
  }
}
