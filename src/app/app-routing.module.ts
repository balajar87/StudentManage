import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './Dashboard/Dashboard.component';
import {StudentlistComponent} from './Studentlist/Studentlist.component';
import { LoginComponent } from './Login/Login.component';
import {HomeComponent} from './Home/Home.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [    
  
  {path:"Dashboard",component:DashboardComponent},
  {path:"todolist",component:TodolistComponent},
  {path:"Studentlist",component:StudentlistComponent},  
  {path:"**",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
