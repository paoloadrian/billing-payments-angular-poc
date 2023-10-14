import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { BillService } from './bill.service';
import { BillServiceMock } from './bill-service.mock';

describe('BillService', () => {
  let service: BillService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

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
    service.getBills(1).subscribe({
        next: clients => {
            expect(clients).toEqual(expectedClients);
            done();
        },
        error: done.fail
    });
    // uncomment after API is implemented
    // expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  })
});
