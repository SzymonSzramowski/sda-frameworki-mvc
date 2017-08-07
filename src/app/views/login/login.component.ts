import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CookieService } from 'ng2-cookies';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private cookieService: CookieService) { }

  public ngOnInit() {
    console.log(this.cookieService.get('useraData'));
  }

  public onLoginClick(event: MouseEvent, userName: string, userPassoword: string): void {
    event.preventDefault();
    this.cookieService.set('useraData', JSON.stringify({login: userName, pass: userPassoword}));
    console.log('zaloguj', userName, userPassoword);

  }

}
