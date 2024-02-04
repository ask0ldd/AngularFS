import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormComponent } from './form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ]
})
export class FormModule { }
