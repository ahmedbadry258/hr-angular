
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Error } from '../data/Error';

import { Region } from '../data/Region';
import { catchError } from 'rxjs/operators';
import { RegionService } from './region.service';

@Injectable({providedIn:'root'})
export class RegionListResolverService implements Resolve<Region[]|Error>{
    constructor(private regionService :RegionService){

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Error | Region[] | Observable<Error | Region[]> | Promise<Error | Region[]> {
return this.regionService.findAllRegions().pipe(
  catchError(err=>of(err))
);
    }
}
