import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, throwError } from 'rxjs';
import { Region } from '../data/Region';
import { Error } from '../data/Error';
import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CACHABLE } from '../core/cache.interceptor';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  regId!:number|null
  private  URL:string="http://localhost:8090";
private selectRegionSource=new BehaviorSubject<Region|null>(null);
//private selectRegionSource=new Subject<Region|null>();
selectRegionChanges$=this.selectRegionSource.asObservable();
  constructor(private http:HttpClient) { }
  changeSelectedRegion(selectedRegion:Region|null):void{
   this.regId!= selectedRegion?.regionId
this.selectRegionSource.next(selectedRegion);
  }

  // start region service

  findAllRegionsPagination(page:number ,items:number):Observable<any |Error>{
    return this.http.get<any>(`${this.URL}/regions/list?page=${page}&items=${items}`,{
      context:new HttpContext().set(CACHABLE,false)
    })
    .pipe(catchError(err=>this.handleHttpError(err)));
    //return of(employee);
  }

  findAllRegions():Observable<Region[] |Error>{
    console.log("call region list ");

    return this.http.get<Region[]>(`${this.URL}/regions`,{
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

}
