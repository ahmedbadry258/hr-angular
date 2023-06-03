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


@Injectable({
  providedIn: 'root'
})
export class DataService {
private  URL:string="http://localhost:8080/hr";


  constructor(private http:HttpClient) {

   }
// start region service

  findAllRegions():Observable<Region[] |Error>{
    console.log("call region list ");
    return this.http.get<Region[] >(`${this.URL}/regions`,{
      context:new HttpContext().set(CACHABLE,false)
    })
    .pipe(catchError(err=>this.handleHttpError(err)));
    //return of(employee);
  }



  findRegion(id:number):Observable<Region>{
    return this.http.get<Region>(`${this.URL}/regions/${id}`);
  }
  addRegion(region :Region):Observable<Region>{
    return this.http.post<Region>(`${this.URL}/regions`,region,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
  updateRegion(region :Region):Observable<void>{
    return this.http.put<void>(`${this.URL}/regions/${region.regionId}`,region,{
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    });
  }
deleteRegion(id:number) :Observable<string>{
  return this.http.delete<string>(`http://localhost:8080/regions/${id}`)
}
private handleHttpError(error :HttpErrorResponse):Observable<Error>{
  let dataError= new Error();
  dataError.errorNumber=error.status;
  dataError.message=error.statusText;
  dataError.friendlyMessage=`an error happen ${error.message}`;
      return throwError(dataError);
      }
// end region services
// start country services
findAllCountries():Observable<Country[] |Error>{
  return this.http.get<Country[] |Error>(`${this.URL}/countries`)
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
// start employees service
findAllEmployees() : Observable<Employee[]>{
  return this.http.get<Employee[]>(`${this.URL}/employees`)
}
findEmployeeById(employeeId:number) : Observable<Employee>{
  return this.http.get<Employee>(`${this.URL}/employees/${employeeId}`)
}
saveEmployee(employee:Employee) : Observable<Employee>{
  return this.http.post<Employee>(`${this.URL}/employees`,employee)
}

// end employees service


}

// constructor(private http:HttpClient) { }
// saveEmployee(employee :Employee):Observable<any>{
//   return this.http.post('http://localhost:8081/',employee);
//   //return of(employee);
// }
