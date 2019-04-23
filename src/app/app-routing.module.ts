import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {BeforeLoginService} from './providers/before-login.service';
import {AfterLoginService} from './providers/after-login.service';
import {HomeComponent} from './home/home.component';
import {DetailComponent} from './detail/detail.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService]},
  { path: 'signup', component: SignupComponent, canActivate: [BeforeLoginService]},
  { path: 'home', component: HomeComponent, canActivate: [AfterLoginService]},
  { path: 'detail/:id', component: DetailComponent, canActivate: [AfterLoginService]},
  { path: '',   redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
