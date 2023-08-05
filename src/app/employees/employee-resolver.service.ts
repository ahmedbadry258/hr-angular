import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Employee, EmployeeResolved } from "../data/Employee";
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmployeeService } from "./employee.service";
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn:'root'
})

export class EmployeeResolver implements Resolve<Employee> {

  constructor(private employeeService: EmployeeService) { }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Employee>|Promise<Employee>|Employee  {
   const  id  = route.paramMap.get('id');
  return this.employeeService.findEmployeeById(Number(id));
    }

    // return this.productService.findEmployeeById(id)
    //   .pipe(
    //     map(product => ({ product: product })),
    //     catchError(error => {
    //       const message = `Retrieval error: ${error}`;
    //       console.error(message);
    //       return of({ product: null, error: message });
    //     })
    //   );
 // }
}
