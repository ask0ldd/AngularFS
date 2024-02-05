import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { map, take } from 'rxjs';
import { MockApiService } from 'src/app/mockapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private mockApiService : MockApiService) { }

  loginForm = new FormGroup({
    login : new FormControl('', [Validators.minLength(2), Validators.required]),
    password : new FormControl('', [Validators.minLength(8), Validators.required])
  })

  onSubmit() {
    console.log(this.loginForm.value)
    // unsubscribe after getting the a value
    this.mockApiService.login$().pipe(take(1)).subscribe(token => console.log(token))
  }
}
