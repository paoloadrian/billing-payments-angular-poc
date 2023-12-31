import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillsComponent } from './bills.component';
import { ClientService } from '../services/client/client.service';
import { ClientServiceMock } from '../services/client/client-service.mock';
import { BillService } from '../services/bill/bill.service';
import { BillServiceMock } from '../services/bill/bill-service.mock';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarMock } from '../lib-mocks/mat-snack-bar.mock';

describe('BillsComponent', () => {
  let component: BillsComponent;
  let fixture: ComponentFixture<BillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillsComponent ],
      providers: [ 
        { provide: ClientService, useValue: ClientServiceMock },
        { provide: BillService, useValue: BillServiceMock },
        { provide: MatSnackBar, useValue: MatSnackBarMock }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
