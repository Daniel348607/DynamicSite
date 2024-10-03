import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { UserLogin } from './models/usuariologin';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  selectedUser: UserLogin;
  appc: AppComponent | undefined;

  readonly URL_Base = 'http://localhost:8085/ecomm/'
  readonly URL_API = this.URL_Base + 'usuariologin';

  constructor(public http: HttpClient) {
    this.selectedUser = new UserLogin();
  }

  reset(){
    var f = {} as NgForm;
    this.appc?.resetForm(f);
  }

  getUsuarioLogin(user: UserLogin){
    return this.http.post(this.URL_API, user);
  }

}
