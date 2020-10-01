import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  constructor(private authService:AuthService) { }

  ngOnInit() {

  }

  setToken() {
    this.authService.setTokenInLocalStorage('f0cb8a50aa5a42eaf3c68511c73742534dcf51dec7e3c71f8aef0a7541a39d8c');
  }

  logout() {
    localStorage.clear()
  }
}
