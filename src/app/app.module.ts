import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';


import {AfterLoginService} from './providers/after-login.service';
import {AuthService} from './providers/auth.service';
import {BeforeLoginService} from './providers/before-login.service';
import {JarwisService} from './providers/jarwis.service';
import {TokenService} from './providers/token.service';
import {PagerService} from './providers/pager.service';
import { DetailComponent } from './detail/detail.component';
import {NotFoundComponent} from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NavbarComponent,
    DetailComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AfterLoginService,
    AuthService,
    BeforeLoginService,
    JarwisService,
    TokenService,
    PagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
