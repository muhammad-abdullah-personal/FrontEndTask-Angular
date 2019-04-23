import { Component, OnInit } from '@angular/core';
import {JarwisService} from '../providers/jarwis.service';
import {TokenService} from '../providers/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public form = {
    // email: null,
    username: null,
    password: null,
    // password_confirmation: null
  };
  public error = [];
  constructor(private jarwis: JarwisService, private token: TokenService, private router: Router) { }

  ngOnInit() {}
  onSubmit() {
    console.log(this.form);
    this.jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    // this.token.handle(data.token);
    this.router.navigateByUrl('/login');
  }
  handleError(error) {
    this.error = error.error.errors;
  }
}
