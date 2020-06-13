import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from './core/http/api.service';
import { User } from './Register/Model/user';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiURL = 'https://stmanagedev.azurewebsites.net/api';
  httpOptions: {};
  private readonly loggedIn: Subject<boolean> = new Subject();
  public loggedIn$: Observable<boolean> = this.loggedIn.asObservable();
  constructor(private apiService: ApiService) { }

  getstudent() {
    this.loggedIn.next(true);
  }

  addUser(UserModel): Observable<any> {
    return UserModel; // this.http.post<any>(this.apiURL + '/Student', UserModel, this.httpOptions);
  }

  public getStudent(id: number): Observable<User> {
    return this.apiService.get(`${this.apiURL}<replace the end point>/${id}`);
  }

  public postStudent(student: User): Observable<User> {
    return this.apiService.post(`${this.apiURL}/student`, student);
  }
}
