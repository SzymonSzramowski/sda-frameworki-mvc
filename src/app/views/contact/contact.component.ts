import { BehaviorSubject, Observable, Observer } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    const licznik = Observable.interval(1000);
    licznik.subscribe((time: number) => {
      console.log(time);
    });

    const newsy = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('Wiadomosc po pierwszej sekundzie');
      }, 1000);
      setTimeout(() => {
        observer.next('Wiadomosc po trzeciej sekundzie');
      }, 3000);
      setTimeout(() => {
        observer.next('Wiadomosc po 5 sekundzie');
      }, 3000);

      setTimeout(() => {
        observer.error('Wiadomosc po pierwszej sekundzie');
      }, 6000);
    });

    newsy.subscribe((wiadomosc: string) => {
      console.log(wiadomosc);
    },
    (error) => {
      console.log(error);
    },
    () => {
      console.log('Zakonczono');
    });

    const newsy2 = new BehaviorSubject<string>('pierwsza wiadomosc');

    newsy2.subscribe((wiadomosc: string) => {
      console.log(wiadomosc);
    });

    setTimeout(() => {
      newsy2.next('ostatnia wiadomosc');
    }, 9000);
  }

}
