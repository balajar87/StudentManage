import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { StudentlistComponent } from './Studentlist/Studentlist.component';
import { LoginComponent } from './Login/Login.component';
import { HomeComponent } from './Home/Home.component';
import { TodolistComponent } from './todolist/todolist.component';
import {RegisterComponent} from './Register/Register.component';
import { CoursesComponent } from './Courses/Courses.component';

const routes: Routes = [

  { path: "Dashboard", component: DashboardComponent },
  { path: "todolist", component: TodolistComponent },
  { path: "Studentlist", component: StudentlistComponent },
  { path: "Register", component: RegisterComponent },
  { path: "Courses", component: CoursesComponent },
  { path: "**", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
