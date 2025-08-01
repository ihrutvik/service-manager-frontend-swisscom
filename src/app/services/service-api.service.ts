import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceEntity, ApiResponse } from '../models/service.model';

@Injectable()
export class ServiceApiService {
  private baseUrl = '/api/v1/services';

  constructor(private http: HttpClient) {} // ✅ inject HttpClient

  getServiceById(id: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseUrl}/${id}`);
  }

  createService(service: ServiceEntity): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, service);
  }

  updateService(id: string, service: ServiceEntity): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(`${this.baseUrl}/${id}`, service);
  }

  deleteService(id: string): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.baseUrl}/${id}`);
  }
}
