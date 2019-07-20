import { Component, OnInit, Input } from '@angular/core';
import { CertificateServiceService } from 'src/app/service/certificate-service.service';
import { FormGroup } from '@angular/forms';
import { ICertificateData, CertificateRequest } from 'src/app/model/certificate';

@Component({
  selector: 'app-certificate-upload',
  templateUrl: './certificate-upload.component.html',
  styleUrls: ['./certificate-upload.component.css']
})
export class CertificateUploadComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() fcName: string;
  public base64cert: string;
  public certData: ICertificateData;

  constructor(
    private certService: CertificateServiceService) { }
    
  ngOnInit() {
    let certdata = this.form.controls[this.fcName].value;
    debugger;
    if(certdata){
      this.loadCertData(certdata);
    }
  }

  fileChange(e: any){
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var reader = new FileReader();
    reader.onload = this.handleFileLoad.bind(this);
    reader.readAsDataURL(file);
  }

  private handleFileLoad(e) {
    let reader = e.target;
    this.loadCertData(reader.target);
  }

  private loadCertData(certStr) {
    let certReq = new CertificateRequest(certStr);
    this.toggleLoadingindicator(true);
    this.certService.getCertificateData(certReq)
      .subscribe(certData => {
        //TODO add more checks
        if(certData.valid){
          this.certData = certData;
          this.setForm(certData.data);
        } else {
          this.displayError();
        }
        this.toggleLoadingindicator(false);
      });
  }

  private setForm(certDataBase64: string){
    this.form.controls[this.fcName].setValue(certDataBase64);
  }

  private toggleLoadingindicator(visible: boolean){
    console.log("Toggle spinner: " + visible);
  }

  private displayError(){
    //TODO substitute with notification
    alert("Bad file");
  }

}
