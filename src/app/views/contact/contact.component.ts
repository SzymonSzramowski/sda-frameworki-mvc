import { BehaviorSubject, Observable, Observer, Subscription } from 'rxjs/Rx';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  public licznik = Observable.interval(1000);

  public ngOnInit() {
    this.subscription = this.licznik.subscribe((time: number) => {
      console.log(time);
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
