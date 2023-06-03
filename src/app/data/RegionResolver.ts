
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Error } from './Error';
import { DataService } from '../services/data.service';
import { Region } from './../data/Region';
import { catchError } from 'rxjs/operators';
@Injectable({providedIn:'root'})
export class RegionResolverService implements Resolve<Region[]|Error>{
    constructor(private dataService :DataService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Error | Region[] | Observable<Error | Region[]> | Promise<Error | Region[]> {
return this.dataService.findAllRegions().pipe(
  catchError(err=>of(err))
);
    }
}
