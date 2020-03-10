import { Component, OnInit, ViewChild,NgModule } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


export interface PeriodicElement {  
  CourseID: number;
  CourseName: string;
  Duration: number;
  Cost: string;
  isedit: boolean;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { CourseID: 1, CourseName: 'Designing Course', Duration: 6, Cost: 'H', isedit: false },
  { CourseID: 2, CourseName: 'Designing Course1', Duration: 10, Cost: 'H', isedit: false },
  { CourseID: 3, CourseName: 'Designing Course2', Duration: 15, Cost: 'H', isedit: false },
];

@Component({
  selector: 'app-Courses',
  templateUrl: './Courses.component.html',
  styleUrls: ['./Courses.component.css']
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['CourseID', 'CourseName', 'Duration', 'Cost', 'action'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _snackBar: MatSnackBar) { }


  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    //debugger;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  edit(model: PeriodicElement) {
    if (model.isedit)
      model.isedit = false;
    else
      model.isedit = true;
  }
  save(model: PeriodicElement) {
    if (model.isedit)
      model.isedit = false;
    else
      model.isedit = true;

      this.openSnackBar("Records Saved", "Ok");
  }

  cancel(model: PeriodicElement) {
    if (model.isedit)
      model.isedit = false;
    else
      model.isedit = true;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
