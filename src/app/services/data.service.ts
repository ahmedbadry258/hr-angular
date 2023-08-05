import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {  Observable ,throwError} from 'rxjs';
import { catchError ,filter} from 'rxjs/operators';
import { Region } from '../data/Region';
import { Error } from '../data/Error';
import { Country } from './../data/Country';
import { Location } from './../data/Location';
import { Job } from '../data/Job';
import { Department } from './../data/Department';
import { CACHABLE } from '../core/cache.interceptor';
import { Employee } from '../data/Employee';
import { DepartmentEmployee } from '../data/DepartmentEmployee';


@Injectable({
  providedIn: 'root'
})
export class DataService {
//private  URL:string="http://localhost:8080/hr";
private  URL:string="http://localhost:8090";

  constructor(private http:HttpClient) {

   }
   private handleHttpError(error :HttpErrorResponse):Observable<Error>{
    let dataError= new Error();
    dataError.errorNumber=error.status;
    dataError.message=error.statusText;
    dataError.friendlyMessage=`an error happen ${error.message}`;
        return throwError(dataError);
        }
// start country services
findAllCountriesPagination(page:number ,items:number):Observable<any|Error>{
  return this.http.get<any |Error>(`${this.URL}/countries/list?page=${page}&items=${items}`)
  .pipe(catchError(err=>this.handleHttpError(err)));;
}
findAllCountries():Observable<Country[]|Error>{
  return this.http.get<Country[]|Error>(`${this.URL}/countries`)
  .pipe(catchError(err=>this.handleHttpError(err)));;
}
findCountryById(id :string):Observable<Country>{
  return this.http.get<Country>(`${this.URL}/countries/${id}`)
}

addCountry(country : Country):Observable<Country>{
  return this.http.post<Country>(`${this.URL}/countries`,country,{
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  });
}
updateCountry(country :Country):Observable<Country>{
 return this.http.put<Country>(`${this.URL}/countries/${country.countryId}`,country)
}
deleteCountry(countryId :string):Observable<string>{
  return this.http.delete<string>(`${this.URL}/countries/${countryId}`)
}

// end country services
// start location services
findAllLocation():Observable<Location[]|Error>{
  return this.http.get<Location[]|Error>(`${this.URL}/locations`)
}
findLocationById(id :number):Observable<Location>{
  return this.http.get<Location>(`${this.URL}/locations/${id}`)
}
addLocation(location: Location) :Observable<Location>{
  return this.http.post<Location>(`${this.URL}/locations`,location)
}
editLocation(location: Location) :Observable<Location>{
  return this.http.put<Location>(`${this.URL}/locations/${location.locationId}`,location)
}
deleteLocation(id: number) :Observable<string>{
  return this.http.delete<string>(`${this.URL}/locations/${id}`,{
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
})
}

// end location services
// start job services
findAllJob():Observable<Job[]|Error>{
  return this.http.get<Job[]|Error>(`${this.URL}/jobs`)
}
findJobById(id :string):Observable<Job>{
  return this.http.get<Job>(`${this.URL}/jobs/${id}`)
}
addJob(job: Job) :Observable<Job>{
  return this.http.post<Job>(`${this.URL}/jobs`,job)
}
editJob(job: Job) :Observable<Job>{
  return this.http.put<Job>(`${this.URL}/jobs/${job.jobId}`,job)
}
deleteJob(id: string) :Observable<string>{
  return this.http.delete<string>(`${this.URL}/jobs/${id}`)
}
findJobsWithPagination(page:number,items:number):Observable<any>{
 return  this.http.get<any>(`${this.URL}/jobs/list?page=${page}&items=${items}`)
}
// end job services
// start department service
findAllDepartments() : Observable<Department[]|Error>{
  return this.http.get<Department[]|Error>(`${this.URL}/departments`)
}
addDepartment(department :Department):Observable<Department>{
return this.http.post<Department>(`${this.URL}/jobs`,department);
}
findDepartmentById(id :number):Observable<Department>{
  return this.http.get<Department>(`${this.URL}/departments/${id}`)
}

// end department service

// start chart service

countEmployeeByDepartment():Observable<DepartmentEmployee[]>{
  return this.http.get<DepartmentEmployee[]>(`${this.URL}/employees/countEmployeeByDepartment`)
}
// end chart service

}

// constructor(private http:HttpClient) { }
// saveEmployee(employee :Employee):Observable<any>{
//   return this.http.post('http://localhost:8081/',employee);
//   //return of(employee);
// }
