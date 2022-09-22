import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  postbatch(postdata: any) {
    return this.http.post(`&{environment.baseUrl}/`, postdata);
  }
}
