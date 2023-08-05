import { Component, OnInit } from '@angular/core';
import { Error } from '../../data/Error';
import { Region } from '../../data/Region';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { RegionService } from '../region.service';
@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css'],
})
export class RegionComponent implements OnInit {
  ids: number[];
  regionList: Region[];
  region: Region = { regionId: 0, regionName: '' };
  page: number = 0;
  regions: Array<any> = [];
  pages!: Array<number>;
  noOfItmes: number = 5;
  items: number[] = [5, 10, 15];
  selectedRegId!:number|null
  constructor(private dataService: DataService,
              private regionService: RegionService,
              private route: ActivatedRoute) {
    this.regionList = [];
    this.ids = [];
  }
  ngOnInit(): void {
    this.getAllRegionsPagination();
  }
  getAllRegionsPagination() {
    this.regionService
      .findAllRegionsPagination(this.page, this.noOfItmes)
      .subscribe(
        (data: any | Error) => {
          console.log(data);
          this.regions = <any>data['content'];
          this.pages = this.findPages(data['totalPages']);
        },
        (error: Error) => console.log(error),
        () => console.log('find All Regions')
      );
  }
  onClickDelete(id: number) {
    let x = confirm(`are u want delete ${id}`);
    if (x) {
      this.regionService.deleteRegion(id).subscribe(
        (data: string) => console.log(`data${data}`),
        (error: any) => console.log(`error ${error.errorMessage}`)
      );
    }
  }
  findPages(totalPages: number): number[] {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  setPage(i: number, event: any) {
    (this.page = i), this.getAllRegionsPagination();
  }
  setItems() {
    (this.page = 0), this.getAllRegionsPagination();
  }
  onSelect(region: Region) {
    this.regionService.changeSelectedRegion(region);
  this.selectedRegId=  this.regionService.regId
  }
}
