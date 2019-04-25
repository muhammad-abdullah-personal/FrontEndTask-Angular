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

    username: null,
    password: null,

  };
  public hasError = false;
  public signUpSuceess = false;
  constructor(private jarwis: JarwisService, private token: TokenService, private router: Router) { }

  ngOnInit() {}
  onSubmit() {
    this.signUpSuceess = false;
    this.hasError = false;
    console.log(this.form);
    this.jarwis.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)

    );

  }
  handleResponse(data) {
    this.signUpSuceess = true;

  }
  handleError(error) {
    this.hasError = true;
    this.signUpSuceess = false;
  }
}
