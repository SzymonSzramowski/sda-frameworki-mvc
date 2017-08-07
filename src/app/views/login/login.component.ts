import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  public ngOnInit() {
  }

  public onLoginClick(event: MouseEvent, userName: string, userPassoword: string): void {
    event.preventDefault();
    console.log('zaloguj', userName, userPassoword);
  }

}
