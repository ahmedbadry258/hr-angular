import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ElementRef,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.css'],
})
export class CriteriaComponent implements OnInit, OnChanges, AfterViewInit {

  @Input('filterElement') filterElementRef!: ElementRef;
  @Input() hitsCount!: number;
  hitMesages:string='';
  @Output() valueChanges:EventEmitter<string>=new EventEmitter;
  private _listFilter: string = '';
  get listFilter():string{
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter=value;
    this.valueChanges.emit(value)
  }
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
   console.log("on Changes")
    console.log(changes);
    if(changes['hitsCount'] && !changes['hitsCount'].currentValue){
this.hitMesages='No Hit Messages Found';
    }else{
      this.hitMesages=`Hits ${this.hitsCount}`
    }
  }
  ngOnInit(): void {}
  @Input() showDttails?: boolean;

  ngAfterViewInit(): void {
    console.log(this.filterElementRef);
   // this.filterElementRef.nativeElement.value = 'Enter First Name';
   // this.filterElementRef.nativeElement.focus();
  }
}
