import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MockApiService } from '../mockapi.service';

const authRoutes: Routes = [
  {path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
  ],
  providers: [
    MockApiService
  ],
})
export class AuthModule { }
