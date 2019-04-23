import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private iss = {
    login: 'http://stoqo-take-home.xdzdxquptm.ap-southeast-1.elasticbeanstalk.com/login/',
  };

  constructor() {
  }

  handle(token) {
    this.set(token);
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    return localStorage.removeItem('token');
  }
  isValid() {
    const token = this.get();
    if (token) {
      return true;
      // const payload = this.payload(token);
      // if (payload) {
      //   console.log(payload);
      //   return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      // }
    } else {
      return false;
    }
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
