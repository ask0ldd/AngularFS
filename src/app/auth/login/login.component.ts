import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor() { }

  loginForm = new FormGroup({
    login : new FormControl('', [Validators.minLength(2), Validators.required]),
    password : new FormControl('', [Validators.minLength(8), Validators.required])
  })

  onSubmit() {
    console.log(this.loginForm.value)
  }
}
