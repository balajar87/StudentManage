import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './Home/Home.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { StudentlistComponent } from './Studentlist/Studentlist.component';
// import { LoginComponent } from './login/login.component';
import { LoginComponent } from './Login/Login.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { TodolistComponent } from './todolist/todolist.component';
import { RegisterComponent } from './Register/Register.component';
 import { FlexLayoutModule } from '@angular/flex-layout';
import { CoursesComponent } from './Courses/Courses.component';
import { AccountsComponent } from './Accounts/Accounts.component';
import { FollowupComponent } from './followup/followup.component';

@NgModule({
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
   ],
   declarations: [
      AppComponent,
      HomeComponent,
      DashboardComponent,
      StudentlistComponent,
      //LoginComponent,
      LoginComponent,
      TodolistComponent,
      RegisterComponent,
      CoursesComponent,
      AccountsComponent,
      AccountsComponent,
      FollowupComponent
   ],
   imports: [
      FlexLayoutModule,
      MatExpansionModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatMenuModule,
      MatDialogModule,
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      HttpClientModule,
      MatToolbarModule,
      MatIconModule,
      MatSidenavModule,
      MatListModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatButtonModule,
      MatCardModule,
      MatTableModule,
      MatIconModule,
      MatSnackBarModule,
      MatPaginatorModule,
      MatSelectModule,
      MatSortModule,
      MatListModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
