import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input()details?:boolean;
}
