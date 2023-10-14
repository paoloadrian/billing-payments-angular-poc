import { Component, OnInit } from '@angular/core';
import { Client } from '../models/client';
import { ClientService } from '../services/client/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clientList: Client[] = [];
  readonly errorMessage: string = 'Error reading clients';
  showError: boolean = false;

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((response: Client[]) => {
      this.clientList = response;
    }, (error) => {
      console.error(error);
      this.showError = true;
    });
  }

  viewBills(client: Client): void {
    this.clientService.selectClient(client);
    this.router.navigate(['bills']);
  }

}
