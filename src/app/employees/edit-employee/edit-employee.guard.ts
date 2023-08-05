import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditEmployeeComponent } from './edit-employee.component';


@Injectable({
  providedIn: 'root'
})
export class EditEmployeeGuard implements CanDeactivate<EditEmployeeComponent> {
  canDeactivate(component: EditEmployeeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      if (component.editEmployeeForm.dirty) {
// if (component.isDirty) {
  console.log(component.isDirty)
const employeeName = component.employee.firstName || 'New Product';
return confirm(`Navigate away and lose all changes to ${employeeName}?`);
}
return true;
}

}
