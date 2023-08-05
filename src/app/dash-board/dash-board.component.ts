import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { SeriesOptionsType } from 'highcharts';
import { DataService } from 'src/app/services/data.service';
import { DepartmentEmployee, Obj } from '../data/DepartmentEmployee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
})
export class DashBoardComponent implements OnInit {
  departmentEmployeeList: DepartmentEmployee[] = [];
  data = [];
  oj :Obj=new Obj();
  constructor(private dataService: DataService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.findCountEmployeesInDepartments();
    const employeeName=this.route.snapshot.paramMap.get('employeeName');
const email=this.route.snapshot.paramMap.get('email')
console.log(`email ${email}`)
console.log(`employee Name ${employeeName}`)
  }
  series: SeriesOptionsType[] = [
    {
      name: 'Series 1',
      data: [
        { name: 'Department 1', y: 50 },
        { name: 'Department 2', y: 40 },
        { name: 'Department 3', y: 30 },
      ],
      type: 'column',
    },
  ];

  add() {
    //this.chart.addPoint(Math.floor(Math.random() * 10));
  }
  chart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Linechart',
    },
    credits: {
      enabled: false,
    },
    series: this.series,
  });

  findCountEmployeesInDepartments() {
    this.dataService.countEmployeeByDepartment().subscribe(
      (data: DepartmentEmployee[]) => {
        this.departmentEmployeeList = data;

        for (const d of this.departmentEmployeeList) {

        }
        console.log(data)
      },
      (error: Error) => {
        console.log(error.message);
      }
    );
  }
}
