import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { BillService } from './bill.service';
import { BillServiceMock } from './bill-service.mock';
import { environment } from 'src/environments/environment';

describe('BillService', () => {
  let service: BillService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const URL = '/bills';
  const clientId = 1;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    TestBed.configureTestingModule({
      providers: [
        { provide:  HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(BillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of bills for first client', (done: DoneFn) => {
    const expectedClients: any = BillServiceMock.billList;
    httpClientSpy.get.and.returnValue(BillServiceMock.getBills());
    service.getBills(clientId).subscribe({
        next: clients => {
            expect(clients).toEqual(expectedClients);
            done();
        },
        error: done.fail
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(clientId);
    const headers = new HttpHeaders();
    const params = new HttpParams().append('clientId', clientId);
    expect(httpClientSpy.get).toHaveBeenCalledWith(environment.API_BASE_URL + URL, { headers, params });
  });

  it('should call pay bill API when payBill is called', (done: DoneFn) => {
    httpClientSpy.put.and.returnValue(BillServiceMock.payBill(clientId));
    service.payBill(clientId).subscribe({
        next: () => { done(); },
        error: done.fail
    });
    expect(httpClientSpy.put).toHaveBeenCalledTimes(clientId);
    expect(httpClientSpy.put).toHaveBeenCalledWith(environment.API_BASE_URL + URL + `/${clientId}`, clientId);
  });
});
