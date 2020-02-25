import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatCardModule } from '@angular/material';
import { MatFormFieldModule, MatDialogModule, MatInputModule, MatTableModule, MatSnackBarModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { HomeComponent } from './Home/Home.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { StudentlistComponent } from './Studentlist/Studentlist.component';
// import { LoginComponent } from './login/login.component';
import { LoginComponent } from './Login/Login.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { TodolistComponent } from './todolist/todolist.component';

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

   ],
   imports: [
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
