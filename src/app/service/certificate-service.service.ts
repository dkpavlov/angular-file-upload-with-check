import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICertificateData, MockCertificateData, CertificateRequest } from '../model/certificate';

@Injectable({
  providedIn: 'root'
})
export class CertificateServiceService {

  constructor() { }

  getCertificateData(certReq: CertificateRequest): Observable<ICertificateData> {
    return Observable.create(observer => {
      observer.next(this.genereteMockCertData());
      observer.complete();
    });
  }

  genereteMockCertData(): ICertificateData{
    return new MockCertificateData({
      valid: true,
      data: 'Mock Base64 data',
      serialNumber: 'PGOBN-9112153829',
      issuer: "BORICA",
      validityDate: new Date(),
      ocspCheck: true
    } as ICertificateData);
  }
}
