import { Component, OnInit } from '@angular/core';
import {AuthService} from '../providers/auth.service';
import {Router} from '@angular/router';
import {TokenService} from '../providers/token.service';
import {JarwisService} from '../providers/jarwis.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form = {
    username: null,
    password: null
  };
  public error = null;
  public hasError = false;
  constructor(private jarwis: JarwisService, private token: TokenService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form);
    this.jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }
  handleResponse(data) {
    this.token.handle(data.token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/home');
  }
  handleError(error) {
    this.error = true;
    this.hasError = true;
    console.log('error is ' + this.error);
  }

}
