import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input()
  public title: string;

  @Input()
  public message: string;

  constructor() { }

  public ngOnInit() {
  }

}
