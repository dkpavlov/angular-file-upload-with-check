import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CertificateUploadComponent } from './component/certificate-upload/certificate-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    CertificateUploadComponent
  ],
  imports: [
    BrowserModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
