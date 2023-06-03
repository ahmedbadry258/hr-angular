import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpContextToken
} from '@angular/common/http';
import { Observable, of,tap } from 'rxjs';
import { HttpCacheService } from './http-cache.service';

 export const CACHABLE=new HttpContextToken(() => true)

@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private httpCacheService: HttpCacheService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // only cache request configured to be cachable
if(!request.context.get(CACHABLE)){
return next.handle(request)
}

    // pass along any non-cachable request
    if(request.method !== 'GET'){
      console.log(`invalidating cache : ${request.method} ${request.url}`)
      this.httpCacheService.invalidateCache();
      return next.handle(request)
    }

    // attemp to retrive a cached response

    const cachedResponse :HttpResponse<any>|undefined=this.httpCacheService.get(request.url);

    //return cache response
    if(cachedResponse){
      console.log(`returning a cache response : ${cachedResponse.url}`)
      console.log(cachedResponse)
      return of(cachedResponse)
    }


    return next.handle(request).pipe(
      tap(event =>{
        if(event instanceof HttpResponse){
          console.log(`adding item to cache`);
          this.httpCacheService.put(request.url,event)
        }
      } ));
  }
}
