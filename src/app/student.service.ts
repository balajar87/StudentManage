  import { Injectable } from '@angular/core';
  import { Subject, Observable } from 'rxjs';
  import { HttpClient, HttpHeaders } from '@angular/common/http';

  @Injectable({
    providedIn: 'root'
  })
  export class StudentService {
    apiURL = "";
    httpOptions : {};
    private readonly loggedIn: Subject<boolean> = new Subject();
    public loggedIn$: Observable<boolean> = this.loggedIn.asObservable();

    getstudent()
    {
      this.loggedIn.next(true);
    }

    addUser(UserModel) : Observable<any> {    
      //console.log(UserModel);
      return this.http.post<any>(this.apiURL+'/Student', UserModel, this.httpOptions);
    }

  constructor(private http: HttpClient) { 
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    
    })
    }
  }
  }
