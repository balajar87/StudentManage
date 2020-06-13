import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from '../student.service'
import { User } from './Model/user';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  userData: User;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private student: StudentService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userName: [null],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      phone: [null],
      email: [null],
      dob: [null],
      courseId: [null],
      fatherOccupation: [null],
      fatherName: [null],
      fPhone: [null],
      fatherOrg: [null],
      fAnnualIncome: [null],

      motherName: [null],
      mPhone: [null],
      motherOccupation: [null],
      motherOrg: [null],
      mAnnualIncome: [null],

      // username: [null, Validators.required],
      // password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  save() {
    if (!this.registerForm.invalid) {
      return;
    }

    this.userData = this.registerForm.value;

    console.log(this.userData);

    this.student.postStudent(this.userData).subscribe(data => {
      console.log(data);
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
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
