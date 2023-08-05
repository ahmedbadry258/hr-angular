import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/data/Employee';

@Component({
  selector: 'app-edit-employee-basic-info',
  templateUrl: './edit-employee-basic-info.component.html',
  styleUrls: ['./edit-employee-basic-info.component.css']
})
export class EditEmployeeBasicInfoComponent implements OnInit {
  employee!:Employee;
  constructor(private activatedRoute:ActivatedRoute){

  }
  ngOnInit(): void {
    console.log('Test 2',this.activatedRoute.parent?.snapshot.data['employee'])
    console.log('Test',this.activatedRoute.data)
    this.activatedRoute.parent?.data.subscribe(data => {
      console.log('Test3',data)
      this.employee = data['employee'];
    });
  }

}
