import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { Vendor } from '../model/vendor';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  url: string= 'http://localhost:61100/api/vendors'

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<Vendor[]> {
    return this.http.get(this.url) as Observable<Vendor[]>;
  }
}
