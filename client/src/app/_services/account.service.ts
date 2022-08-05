import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

//Injectable means in cant be injected into other services and components.
@Injectable({
  providedIn: 'root' //Adding the service to the project
})
//this will make requests from api
export class AccountService {
  baseUrl = 'https://localhost:5001/api/';

  //inject http client into account service
  constructor(private http: HttpClient) { }


  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model);
  }
}
