import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public text: string = '';
  public title: string = '';

  public isImageVisible: boolean = true;
  public currentViewName: string;

  public currentPhoto: number = 0;

  public photos: string[] = [
    'http://www.psy.pl/wp-content/uploads/2010/04/shutterstock_141945937-e1487418626748.jpg',
    'http://www.psy.pl/wp-content/uploads/2010/04/DSC_7650-e1487418540680.jpg',
    'http://www.addestramentocaniblog.it/blog/wp-content/uploads/2014/11/addestamento-golden-retriever.jpg',
  ];

  constructor() {
    console.log('Pierwsza rzecz');
  }

  public changePage(pageName: string): void {
    if (pageName === 'home') {
      this.text = 'Strona glowna';
    } else {
      this.text = 'Inna Strona';
    }

    this.currentViewName = pageName;
  }

  public next(): void {
    if (this.photos.length - 1 > this.currentPhoto) {
      this.currentPhoto++;
    } else {
      this.currentPhoto = 0;
    }
  }

  public prev(): void {
    if (this.currentPhoto > 0) {
      this.currentPhoto--;
    } else {
      this.currentPhoto = this.photos.length - 1;
    }
  }
}
