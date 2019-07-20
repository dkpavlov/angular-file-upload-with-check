export class CertificateRequest {
    data: string;

    constructor(data: string){
        this.data = data;
    }
}

export interface ICertificateData {
    valid: boolean;
    data: string;
    serialNumber: string;
    issuer: string;
    validityDate: Date;
    ocspCheck: boolean;
}

export class MockCertificateData implements ICertificateData {
    valid: boolean;
    data: string;    
    serialNumber: string;
    issuer: string;
    validityDate: Date;
    ocspCheck: boolean;

    constructor(certificateData: ICertificateData){
        this.valid = certificateData.valid;
        this.data = certificateData.data;
        this.serialNumber = certificateData.serialNumber;
        this.issuer = certificateData.issuer;
        this.validityDate = certificateData.validityDate;
        this.ocspCheck = certificateData.ocspCheck;
    }
    
}