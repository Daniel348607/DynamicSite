import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParamuixService {

  readonly URL_Base = 'http://localhost:8085/ecomm/'
  readonly URL_API = this.URL_Base + 'getparamuix';

  constructor(public http: HttpClient) { }

  getparamUIX(par: string) {
      return this.http.get(this.URL_API + `/` + par);
    }

}
