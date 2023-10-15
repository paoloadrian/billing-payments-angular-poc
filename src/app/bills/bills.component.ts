import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../services/client/client.service';
import { Bill } from '../models/bill';
import { BillService } from '../services/bill/bill.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent implements OnInit {
  client: Client = { id: 0, name: ''};
  displayedColumns: string[] = ['dueDate', 'category', 'status', 'action'];
  billList: Bill[] = [];
  readonly errorMessage: string = 'Error reading client\'s bills';
  showError: boolean = false;

  constructor(private clientService: ClientService,
    private billService: BillService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.client = this.clientService.getSelectedClient();
    this.getBillList();
  }

  private getBillList(): void {
    this.billService.getBills(this.client.id).subscribe((response: Bill[]) => {
      this.billList = response.map((bill: Bill) => {
        const month = bill.period.substring(4, 6);
        const year = bill.period.substring(0, 4);
        bill.dueDate = new Date(Number(year), Number(month), 0);
        return bill;
      });
    }, (error) => {
      console.error(error);
      this.showError = true;
    });
  }

  payBill(billId: number): void {
    this.billService.payBill(billId).subscribe(() => {
      this._snackBar.open('Bill successfully paid.', 'Success', { duration: 3000, verticalPosition: 'top' });
      this.getBillList();
    }, (error) => {
      console.error(error);
      this._snackBar.open('Error paying bill.', 'Error', { duration: 3000, verticalPosition: 'top' });
    });
  }

}
