import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { RequestLine } from '@model/request-line.class';

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {
  url: string= 'http://localhost:61100/api/requestlines'

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<RequestLine[]> {
    return this.http.get(this.url) as Observable<RequestLine[]>;
  }
  get(id: number): Observable<RequestLine> {
    return this.http.get(this.url+"/"+id) as Observable<RequestLine>;
  }
  create(RequestLine: RequestLine): Observable<any> {
      return this.http.post(this.url, RequestLine) as Observable<any>;
  }
  edit(RequestLine: RequestLine): Observable<any> {
    return this.http.put(this.url, RequestLine) as Observable<any>;
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url+"/"+id);
  }

}
