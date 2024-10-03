import { Injectable } from '@angular/core';
import { UserLogin } from '../models/usuariologin';
import { Usuario } from '../models/usuarios';

@Injectable()
export class UsuariologinService {

  public isUserLoggedIn;
  public userLogged:UserLogin | undefined;
  public usuarioLogeado:Usuario | undefined;

  constructor() {
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:UserLogin) {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserLoggedIn() {
    var user:UserLogin;
    var usr:string | null = sessionStorage.getItem('currentUser');

    if(usr!=null){
      this.isUserLoggedIn = true;
      return JSON.parse(usr);
    }
  }

  setUserLoggedOut() {
    this.isUserLoggedIn = false;
    sessionStorage.removeItem('currentUser')
  }

}
