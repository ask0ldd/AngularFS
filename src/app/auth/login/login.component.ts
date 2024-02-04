import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  onSubmit(form: NgForm) {
    console.log(form.value); // { first: '', last: '' }
    console.log(form.valid); // false
  }
}