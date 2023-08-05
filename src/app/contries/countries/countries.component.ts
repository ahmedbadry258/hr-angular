import { Component, OnInit } from '@angular/core';
import { Error } from 'src/app/data/Error';
import { DataService } from 'src/app/services/data.service';
import { Country } from './../../data/Country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
})
export class CountriesComponent implements OnInit {
  countries: Country[];
  page: number = 0;
  jobList: Array<any> = [];
  pages!: Array<number>;
  noOfItmes: number = 5;
  items: number[] = [5, 10, 15];
  constructor(private dataService: DataService) {
    this.countries = [];
  }
  getAllCountriesPagination() {
    this.dataService.findAllCountriesPagination(this.page,this.noOfItmes).subscribe(
      (data: any | Error) => {(this.countries = <any>data['content']),
      this.pages=this.findPages(data['totalPages'])
    },
      (error: Error) => console.log(error),
      () => console.log('find All Countries')
    );
  }
  ngOnInit(): void {
    this.getAllCountriesPagination();
  }
  onClickDelete(id: string) {
    let x = confirm('are u sure ?');
    if (x) {
      this.dataService.deleteCountry(id).subscribe(
        (data: string) => {
          alert(data);
          this.getAllCountriesPagination();
        },
        (err: Error) => console.log(err)
      );
    }
  }

  findPages(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  setPage(i: number, event: any) {
    (this.page = i), this.getAllCountriesPagination();
  }
  setItems() {
    (this.page = 0), this.getAllCountriesPagination();
  }
}
