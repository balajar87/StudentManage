import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import {StudentService} from '../student.service'

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
        private router: Router,
        private _snackBar: MatSnackBar,
        private student: StudentService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      UserName: [''],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Phone: [''],
      Email: [''],
      DOB: [''],
      //MPhone: [''],
      CourseId: [''],
      FatherOccupation: [''],
      FatherName: [''],
      FPhone: [''],
      FatherOrg: [''],
      FAnnualIncome: [''],

      MotherName: [''],
      MPhone: [''],
      MotherOccupation: [''],
      MotherOrg: [''],
      MAnnualIncome: [''],

      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }

  save()
  {

    var user = {    
    UserName: this.registerForm.controls["UserName"].value,
    FirstName: this.registerForm.controls["FirstName"].value,
    LastName: this.registerForm.controls["LastName"].value,
    Phone: this.registerForm.controls["Phone"].value,
    Email: this.registerForm.controls["Email"].value,
    DOB: this.registerForm.controls["DOB"].value,
    CourseId: this.registerForm.controls["CourseId"].value,
    FatherOccupation: this.registerForm.controls["FatherOccupation"].value,
    FatherName: this.registerForm.controls["FatherName"].value,
    FPhone: this.registerForm.controls["FPhone"].value,
    FatherOrg: this.registerForm.controls["FatherOrg"].value,
    FAnnualIncome: this.registerForm.controls["FAnnualIncome"].value,
    MotherName: this.registerForm.controls["MotherName"].value,
    //MPhone: this.registerForm.controls["MPhone"].value,
    MotherOccupation: this.registerForm.controls["MotherOccupation"].value,
    MotherOrg: this.registerForm.controls["MotherOrg"].value,
    MAnnualIncome: this.registerForm.controls["MAnnualIncome"].value,

    }
    debugger;   
    this.student.addUser(JSON.stringify(user)).subscribe(
      ()=>{this.openSnackBar("Records Saved", "Ok")}
    );
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    //this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
  }

}
