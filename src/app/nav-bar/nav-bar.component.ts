import { ActivatedRoute, ParamMap, Router, UrlSegment } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public navbarTekst: string = 'Hello';

  constructor() { }

  public ngOnInit() {

  }

}
