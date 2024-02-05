import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { MockApiService } from 'src/app/mockapi.service';
import { CookiesService } from '../cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private mockApiService : MockApiService, private cookiesService : CookiesService) { }

  loginForm = new FormGroup({
    login : new FormControl('', [Validators.minLength(2), Validators.required]),
    password : new FormControl('', [Validators.minLength(8), Validators.required])
  })

  onSubmit() {
    console.log(this.loginForm.value)
    // unsubscribe after getting the a value
    let returnedToken
    this.mockApiService.login$().pipe(take(1)).subscribe(token => returnedToken = token.token )
    if(returnedToken) this.cookiesService.setCookie({userId : 1 , email : "user1@temp.com", token : returnedToken})
  }
}
