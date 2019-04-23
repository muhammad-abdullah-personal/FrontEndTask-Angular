import { Component } from '@angular/core';
import {AuthService} from './providers/auth.service';
import {Router} from '@angular/router';
import { TokenService } from './providers/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first';
  constructor(private auth: AuthService, private token: TokenService, private router: Router) {
    if (!this.token.loggedIn()) {
      console.log('dsfasd');
      this.router.navigateByUrl('login');
    }
  }

  ngOnInit() {

  }
}
