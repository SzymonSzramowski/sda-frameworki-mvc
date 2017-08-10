import { LoginService } from '../../services/login-service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
  }

  public ngOnInit() {
  }

  public onLoginClick(event: MouseEvent, login: string, password: string): void {
    event.preventDefault();

    this.loginService.login(login, password);
  }

}
