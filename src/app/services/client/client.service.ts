import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../../models/client';
import { ClientServiceMock } from './client-service.mock';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private readonly URL = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<Client[]> {
    // return this.httpClient.get<Client[]>(this.URL);
    return ClientServiceMock.getClients();
  }
}
