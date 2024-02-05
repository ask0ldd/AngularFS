import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { isName } from '../validators/isName.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { 
    console.log(this.myForm)
  }

  myForm = new FormGroup({
    firstname : new FormControl('', [Validators.minLength(2), Validators.required, isName]),
    lastname : new FormControl('', [Validators.minLength(2), Validators.required, isName])
  })

  onSubmit() {
    console.log(this.myForm.value)
  }
}
