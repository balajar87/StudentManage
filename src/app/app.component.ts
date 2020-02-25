import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatDialogModule } from '@angular/material'
import { StudentService } from './student.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StudentManage';
  isLoggedIn$: BehaviorSubject<boolean>;
  islog  : boolean = false;

  constructor(private authenticationService:  StudentService,
    private router : Router) {
      //this.isLoggedIn$ = this.authenticationService.loggedIn$;
      this.authenticationService.loggedIn$.subscribe(rg =>
      {
        this.islog = rg;    
        //console.log(rg);    
      });
      
    }

  onlogout() {
    this.islog=false;
    }
  
}

