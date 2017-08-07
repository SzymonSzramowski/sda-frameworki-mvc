import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(http: Http) {
    http.post('http://localhost:3000/authorize/', { login: 'Szymon' }).subscribe((response: Response) => {
      console.log(response.json());
    });
  }

  public ngOnInit() {
    const socket = io.connect('localhost:3000');
    socket.on('connect', () => {
      console.log('connected to socket io');
      setTimeout(() => {
        socket.emit('sendChatMessage', 'hello');
      }, 2000);
    });
    socket.on('receiveChatMessage', (data) => {
      console.log('event ', data);
    });
    socket.on('disconnect', () => {
      console.log('disconnect');
    });
  }

}
