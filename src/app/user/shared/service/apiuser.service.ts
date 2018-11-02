import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiuserService {
URI = 'http://localhost:8000/api/cms/';
  constructor(private http: HttpClient) { }

  getHomePageData(): Observable<any> {
    return this.http.get(`${this.URI}/home`);
  }
  getAboutusPageData(): Observable<any> {
    return this.http.get(`${this.URI}/aboutus`);
  }

  getContactusPageData(): Observable<any> {
    return this.http.get(`${this.URI}/contactus`);
  }


}
