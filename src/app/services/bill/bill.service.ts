import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Bill } from 'src/app/models/bill';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  private readonly URL = environment.API_BASE_URL + '/bills';

  constructor(private httpClient: HttpClient) { }

  getBills(clientId: number): Observable<Bill[]> {
    const headers = new HttpHeaders();
    const params = new HttpParams().append('clientId', clientId);
    return this.httpClient.get<Bill[]>(this.URL, { headers, params });
  }

  payBill(billId: number): Observable<any> {
    return this.httpClient.put<any>(`${this.URL}/${billId}`, billId);
  }
}
