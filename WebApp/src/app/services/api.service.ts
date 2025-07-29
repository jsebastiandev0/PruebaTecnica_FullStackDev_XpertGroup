import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ServiceResponse {
  message?: string;
  service?: string;
  status?: string;
  timestamp?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private service1Url = 'http://localhost:3000';
  private service2Url = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  // Service 1 endpoints
  getService1Home(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(`${this.service1Url}/`);
  }

  getService1Health(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(`${this.service1Url}/health`);
  }

  // Service 2 endpoints
  getService2Home(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(`${this.service2Url}/`);
  }

  getService2Health(): Observable<ServiceResponse> {
    return this.http.get<ServiceResponse>(`${this.service2Url}/health`);
  }
} 