import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';


@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(endpoint);
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    return this.httpClient.post<T>(endpoint, body);
  }

  put<T>(endpoint: string, body: any): Observable<T> {
    return this.httpClient.put<T>(endpoint, body);
  }

  delete<T>(endpoint: string): Observable<T> {
    return this.httpClient.delete<T>(endpoint);
  }
}

