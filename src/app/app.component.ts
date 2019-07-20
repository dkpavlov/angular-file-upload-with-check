import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newForm: FormGroup;
  editForm: FormGroup;

  displayNewForm: boolean = false;
  displayEdiForm: boolean = false; 

  constructor(){
    this.newForm = new FormGroup({
      'cert': new FormControl()
    });

    this.editForm = new FormGroup({
      'cert': new FormControl('some data')
    });
  }

  onSubmit(){
    console.log('New form ', JSON.stringify(this.newForm.value));
    console.log('Edit form ', JSON.stringify(this.editForm.value));
  }

  showEditForm(){
    this.displayEdiForm = true;
    this.displayNewForm = false;
  }

  showNewForm(){
    this.displayEdiForm = false;
    this.displayNewForm = true;
  }
}
