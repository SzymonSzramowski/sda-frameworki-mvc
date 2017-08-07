import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
      const socket = io.connect('http://localhost:3000');
      socket.on('connect', () => {
        console.log('connected to socket io');
        setTimeout(() => {
          socket.emit('sendChatMessage', 'hello');
        }, 2000);
      });
      socket.on('reciveChatMessage', (data) => {
         console.log('event ', data);
      });
      socket.on('disconnect', () => {
         console.log('disconnect');
      });
  }

}
