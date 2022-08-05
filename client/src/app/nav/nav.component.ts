import { Component, OnInit } from '@angular/core';
import { AccountService } from "../_services/account.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  loggerIn: boolean;

  //this injects AccountService from _services folder where we make requests to api.
  //Will use AccountService to login user.
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  //calls login() in AccoutService class with model(info we got from form) from form.
  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.loggerIn = true;
      console.log(response);
      console.log(this.loggerIn);
      }, error => {
      console.log(error);
    })
  }

  logout() {
    this.loggerIn = false;
  }
}
