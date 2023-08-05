import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Employee, EmployeeResolved } from "../data/Employee";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { map, catchError } from 'rxjs/operators';
import { RegionService } from "./region.service";
import { Region } from "../data/Region";

@Injectable({
  providedIn:'root'
})

export class RegionResolver implements Resolve<Region> {

  constructor(private regionService: RegionService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Region>|Promise<Region>|Region  {
   const  id  = route.paramMap.get('id');
  return this.regionService.findRegion(Number(id));
    }

}
