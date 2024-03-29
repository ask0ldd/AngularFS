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
import { AuthModule } from './auth/auth.module';
import { FormModule } from './form/form.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StringifyPipe,
    HightlightDirective,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    FormModule,
    AppRoutingModule, // !!! at the bottom so '*' route don't override auth & form routes
  ],
  providers: [
    MockApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
