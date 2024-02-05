import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth/auth.guard';

const formRoutes: Routes = [
  {path: 'form', component: FormComponent, canActivate:[authGuard]}, // !!! redirect when failing
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
})
export class FormModule { }
