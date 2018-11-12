import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiuserService {
URI = 'http://localhost:8000/api/cms/';
  constructor(private http: HttpClient) { }

  getCmsPageData(data): Observable<any> {
    console.log(data);
    return this.http.get(`${this.URI}/cmspage?slug=${data}`);
  }

}
