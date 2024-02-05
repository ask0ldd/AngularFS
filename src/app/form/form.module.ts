import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidatorService } from './form-validator.service';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/auth.guard';

const formRoutes: Routes = [
  {path: 'form', component: FormComponent, canActivate:[authGuard]},
]

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(formRoutes),
  ],
  providers:[
    FormValidatorService,
  ]
})
export class FormModule { }
