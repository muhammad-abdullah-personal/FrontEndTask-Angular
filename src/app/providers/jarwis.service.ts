import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
  private baseURL = 'http://stoqo-take-home.xdzdxquptm.ap-southeast-1.elasticbeanstalk.com/';
  constructor(private http: HttpClient, private token: TokenService) { }
  signup(data) {
    const  headers = new  HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.baseURL}signup/`, data, {headers});
  }
  login(data) {
    return this.http.post(`${this.baseURL}login/`, data);
  }
  getStores(page: number) {
    const  headers = new  HttpHeaders().set('Authorization', this.token.get());
    return this.http.get(`${this.baseURL}stores/?page=${page}`, {headers});
  }
  getStoresbyType(page: number, type) {
    const  headers = new  HttpHeaders().set('Authorization', this.token.get());
    return this.http.get(`${this.baseURL}stores/?page=${page}&type=${type}`, {headers});
  }


  getStoreDetail(id) {
    const  headers = new  HttpHeaders().set('Authorization', this.token.get());
    return this.http.get(`${this.baseURL}stores/${id}`, {headers});
  }
}
