import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Bill } from 'src/app/models/bill';
import { environment } from 'src/environments/environment';
import { BillServiceMock } from './bill-service.mock';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private readonly URL = environment.API_BASE_URL + '/bills';

  constructor(private httpClient: HttpClient) { }

  getBills(clientId: number): Observable<Bill[]> {
    // replace after API is implemented
    // return this.httpClient.get<Client[]>(this.URL);
    return BillServiceMock.getBills();
  }
}
