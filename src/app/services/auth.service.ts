import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getTokenFromLocalStorage() {
    return localStorage.getItem('token')
  }

  setTokenInLocalStorage(value) {
    localStorage.setItem('token', value);
  }

  /*
    Methode de vérification de isLogin / check du localStorage
    Nous pourrions également faire un check en interrogeant le back-end
  */
  isLogin():boolean {
    if ( this.getTokenFromLocalStorage()!=null && this.getTokenFromLocalStorage()!=undefined ) {
      return true;
    }
    else {
       return false;
    }
  }

}