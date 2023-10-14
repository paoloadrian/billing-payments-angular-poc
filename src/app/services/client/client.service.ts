import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../../models/client';
import { ClientServiceMock } from './client-service.mock';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly CLIENT_KEY = 'selectedClient';
  private readonly URL = environment.API_BASE_URL + '/clients';
  private selectedClient: Client = { id: 0, name: ''};

  constructor(private httpClient: HttpClient) {
    const savedClient = sessionStorage.getItem(this.CLIENT_KEY);
    if (savedClient) this.selectedClient = JSON.parse(savedClient);
  }

  getClients(): Observable<Client[]> {
    // replace after API is implemented
    // return this.httpClient.get<Client[]>(this.URL);
    return ClientServiceMock.getClients();
  }

  selectClient(client: Client): void {
    sessionStorage.setItem(this.CLIENT_KEY, JSON.stringify(client));
    this.selectedClient = client;
  }

  getSelectedClient(): Client {
    return this.selectedClient;
  }
}
