import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-Accounts',
  templateUrl: './Accounts.component.html',
  styleUrls: ['./Accounts.component.css']
})
export class AccountsComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit() {
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


