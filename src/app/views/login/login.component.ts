import { LoginService } from '../../login-service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  public loginWasCorrect: boolean = false;
  public loginWasInCorrect: boolean = false;


  public ngOnInit() {
  }

  public onLoginClick(event: MouseEvent, login: string, password: string): void {
    event.preventDefault();

    const logginSuccess: boolean = this.loginService.login(login, password);

    if (logginSuccess) {
      this.loginWasCorrect = true;
      this.loginWasInCorrect = false;
    } else {
      this.loginWasCorrect = false;
      this.loginWasInCorrect = true;
    }
  }

}
