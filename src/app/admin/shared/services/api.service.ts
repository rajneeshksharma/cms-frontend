import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
URI = 'http://localhost:8000/api/cms/';
  constructor(private http: HttpClient) { }

  getCmsPageData(data): Observable<any> {
    return this.http.get(`${this.URI}/cmspage?slug=${data}`);
  }
  sendCmsPageData(data): Observable<any> {
    return this.http.post(`${this.URI}/cmspage`, data);
  }

}
