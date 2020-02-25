import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private readonly loggedIn: Subject<boolean> = new Subject();
  public loggedIn$: Observable<boolean> = this.loggedIn.asObservable();

  getstudent()
  {
    this.loggedIn.next(true);
  }

constructor() { }

}
