import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,AfterViewInit{
  pageTitle='Parent Component'
    _name:string='';

    @ViewChild('firstNameRef') firstNameRef!:ElementRef;
    private _firstName:string='';
  constructor(){
    console.log(this.firstNameRef)
  }

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    console.log(this.firstNameRef)
this.firstNameRef.nativeElement.value='Enter First Name'
this.firstNameRef.nativeElement.focus();
  }
  onChangeName(value:string){
    console.log(value)
  }
get name():string{
return this._name;
}
set name(value:string){
  this._name=value
}
}
