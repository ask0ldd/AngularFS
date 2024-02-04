import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormValidatorService } from './form-validator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private formValidator : FormValidatorService) { }

  onSubmit(form: NgForm) {
    console.log(form.value); // { first: '', last: '' }
    console.log(form.valid); // false
    if(this.formValidator.isName(form.value.first)) console.log("valid data")
  }
}
