import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public currentViewName: string;

  constructor() {
    console.log('App Start!');
  }

  public changePage(pageName: string): void {
    this.currentViewName = pageName;
    console.log(pageName);
  }
}
