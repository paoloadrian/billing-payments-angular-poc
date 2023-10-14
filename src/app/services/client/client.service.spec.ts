import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ClientService } from './client.service';
import { ClientServiceMock } from './client-service.mock';

describe('ClientService', () => {
  let service: ClientService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
    TestBed.configureTestingModule({
      providers: [
        { provide:  HttpClient, useValue: httpClientSpy }
      ]
    });
    service = TestBed.inject(ClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of clients', (done: DoneFn) => {
    const expectedClients: any = ClientServiceMock.clientList;
    httpClientSpy.get.and.returnValue(ClientServiceMock.getClients());
    service.getClients().subscribe({
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
