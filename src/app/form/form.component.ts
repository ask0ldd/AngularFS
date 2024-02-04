import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { FormValidatorService } from './form-validator.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private formValidator : FormValidatorService) { }

  myForm = new FormGroup({
    firstname : new FormControl('', [Validators.minLength(2), Validators.required]),
    lastname : new FormControl('', [Validators.minLength(2), Validators.required])
  })

  onSubmit() {
    console.log(this.myForm.value)
  }
}
