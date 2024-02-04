import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { FormValidatorService } from './form-validator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private formValidator : FormValidatorService) { }

  myForm = new FormGroup({
    firstname : new FormControl(''),
    lastname : new FormControl('')
  })

  onSubmit(form: NgForm) {
    console.log(form.value); // { first: '', last: '' }
    console.log(form.valid); // false
    // if(!this.formValidator.isName(form.value.first))  return
  }
}
