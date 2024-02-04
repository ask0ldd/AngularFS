import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MockApiService } from './mockapi.service';
import { StringifyPipe } from './stringify.pipe';
import { HightlightDirective } from './hightlight.directive';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { FormModule } from './form/form.module';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StringifyPipe,
    HightlightDirective,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    MockApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
