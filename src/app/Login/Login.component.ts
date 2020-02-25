import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material';
import { empty } from 'rxjs';
@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  public loginForm: FormGroup;
  constructor(private router: Router, private student: StudentService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      passWord: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    })
  }

  onlogin() 
  {    
    let username : string =this.loginForm.controls["userName"].value;
    let passWord : string =this.loginForm.controls["passWord"].value;

    if ((username != '' && passWord != '') && (username=="student" && passWord=="pass")) 
    {
      this.router.navigate(["todolist"]);
      this.student.getstudent();
    }
    else {
      this.openSnackBar("Invalid Credentials", "Ok")
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName);
  }

}
