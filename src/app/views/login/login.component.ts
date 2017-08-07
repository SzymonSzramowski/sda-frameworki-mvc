import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('userNameInput')
  public userNameInput: ElementRef;

  @ViewChild('userPassowordInput')
  public userPassowordInput: ElementRef;

  constructor() { }

  public ngOnInit() {
  }

  public onLoginClick(event: MouseEvent): void {
    event.preventDefault();
    console.log('zaloguj', this.userNameInput.nativeElement.value,
                      this.userPassowordInput.nativeElement.value);
  }

}
