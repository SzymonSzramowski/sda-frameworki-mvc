import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() {
    console.log('Tworze komponent');
  }

  ngOnDestroy(): void {
    console.log('Niszcze komponent');
  }
}
