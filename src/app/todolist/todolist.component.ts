import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar, MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  StudentName: string;
  StudentID: string;
  position: number;
  phone: number;
  ParentNumber : number;
  WhatsppNumber : number;
  status: string;
  isedit: boolean;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, StudentID : 'GOS2019-0001',StudentName: 'Mani', phone: 9600684700, ParentNumber : 9600684700 , WhatsppNumber:9600684700, status: 'NC', isedit: false },
  { position: 2, StudentID : 'GOS2019-0013',StudentName: 'Mathi', phone: 9600684701, ParentNumber : 9600684700 , WhatsppNumber:9600684700, status: 'NC', isedit: false },
  { position: 3, StudentID : 'GOS2019-0041',StudentName: 'Mohan', phone: 9600684702,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 4, StudentID : 'GOS2019-0051',StudentName: 'Suresh', phone: 9600684703,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 5, StudentID : 'GOS2019-0061',StudentName: 'Ajith', phone: 9600684704,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 6, StudentID : 'GOS2019-0071',StudentName: 'Andrew', phone: 9600684705,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 7, StudentID : 'GOS2019-0081',StudentName: 'Karthi', phone: 9600684706,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 8, StudentID : 'GOS2019-0091',StudentName: 'Banu', phone: 9600684707,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 9, StudentID : 'GOS2019-0101',StudentName: 'Renu', phone: 9600684708,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 10, StudentID : 'GOS2019-0103',StudentName: 'Kumar', phone: 9600684709,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 11, StudentID : 'GOS2019-0001',StudentName: 'Mani', phone: 9600684700,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 12, StudentID : 'GOS2019-0013',StudentName: 'Mathi', phone: 9600684701,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 13, StudentID : 'GOS2019-0041',StudentName: 'Mohan', phone: 9600684702,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 14, StudentID : 'GOS2019-0051',StudentName: 'Suresh', phone: 9600684703,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 15, StudentID : 'GOS2019-0061',StudentName: 'Ajith', phone: 9600684704,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 16, StudentID : 'GOS2019-0071',StudentName: 'Andrew', phone: 9600684705,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 17, StudentID : 'GOS2019-0081',StudentName: 'Karthi', phone: 9600684706,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 18, StudentID : 'GOS2019-0091',StudentName: 'Banu', phone: 9600684707,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 19, StudentID : 'GOS2019-0101',StudentName: 'Renu', phone: 9600684708,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
  { position: 20, StudentID : 'GOS2019-0103',StudentName: 'Kumar', phone: 9600684709,  ParentNumber : 9600684700 , WhatsppNumber:9600684700,status: 'NC', isedit: false },
];

export interface status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  students: status[] = [
    {value: 'NC', viewValue: 'Not Called'},
    {value: 'C', viewValue: 'Called'},
    {value: 'I', viewValue: 'Interested'},
    {value: 'NI', viewValue: 'Not Interested'},
    {value: 'AT', viewValue: 'Another Time'},
  ];

  displayedColumns: string[] = ['position','StudentID','StudentName', 'phone','ParentNumber','WhatsppNumber', 'status', 'action'];
  //dataSource = ELEMENT_DATA;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  
    
  edit(model: PeriodicElement) {
    if (model.isedit)
    {
      model.isedit = false;
      //disableSelect = new FormControl(false);
    }
    else
    {
      model.isedit = true;
      //disableSelect = new FormControl(true);
    }
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
