import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface PeriodicElement {
  name: string;
  position: number;
  phone: number;
  status: string;
  isedit: boolean;
}

export interface status {
  value: string;
  viewValue: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Mani', phone: 9600684700, status: 'NC', isedit: false },
  { position: 2, name: 'Mathi', phone: 9600684701, status: 'NC', isedit: false },
  { position: 3, name: 'Mohan', phone: 9600684702, status: 'NC', isedit: false },
  { position: 4, name: 'Suresh', phone: 9600684703, status: 'NC', isedit: false },
  { position: 5, name: 'Ajith', phone: 9600684704, status: 'NC', isedit: false },
  { position: 6, name: 'Andrew', phone: 9600684705, status: 'NC', isedit: false },
  { position: 7, name: 'Karthi', phone: 9600684706, status: 'NC', isedit: false },
  { position: 8, name: 'Banu', phone: 9600684707, status: 'NC', isedit: false },
  { position: 9, name: 'Renu', phone: 9600684708, status: 'NC', isedit: false },
  { position: 10, name: 'Kumar', phone: 9600684709, status: 'NC', isedit: false },
];


@Component({
  selector: 'app-followup',
  templateUrl: './followup.component.html',
  styleUrls: ['./followup.component.scss']
})
export class FollowupComponent implements OnInit {

  animal: string;
  name: string;

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  
  students: status[] = [
    {value: 'NC', viewValue: 'Not Called'},
    {value: 'C', viewValue: 'Called'},
    {value: 'I', viewValue: 'Interested'},
    {value: 'NI', viewValue: 'Not Interested'},
    {value: 'AT', viewValue: 'Another Time'},
  ];

  selected = 'NC';

  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<FollowupComponent>,
    private _snackBar: MatSnackBar) { }

    
  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit(): void {
  }

  save()
  {
    this.openSnackBar("Records Saved", "Ok")
  }
    
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
