import { Component, OnInit, ViewChild,NgModule } from '@angular/core';
import { MatTableDataSource,MatSnackBar, MatDialog } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  isedit: boolean;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', isedit: false },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', isedit: false },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', isedit: false },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', isedit: false },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', isedit: false },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', isedit: false },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', isedit: false },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', isedit: false },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', isedit: false },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', isedit: false },
];

@Component({
  selector: 'app-Studentlist',
  templateUrl: './Studentlist.component.html',
  styleUrls: ['./Studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  animal: string;
  name: string;
  

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator; 
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
