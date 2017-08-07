import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input()
  public navbarTekst: string = 'Hello';

  @Output()
  public subPageSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  public ngOnInit() {
  }

}
