import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: string = '';
  title: string = '';

  isImageVisible: boolean = true;

  currentPhoto: number = 0;
  
  photos: string[] = [
    "http://www.psy.pl/wp-content/uploads/2010/04/shutterstock_141945937-e1487418626748.jpg",
    "http://www.psy.pl/wp-content/uploads/2010/04/DSC_7650-e1487418540680.jpg",
    "http://www.addestramentocaniblog.it/blog/wp-content/uploads/2014/11/addestamento-golden-retriever.jpg",
  ]

  constructor() {
    console.log("Pierwsza rzecz")
  }

  onButtonClick() {
    this.text = "9 as String";
    this.isImageVisible = !this.isImageVisible;
  }

  next(): void {
    if (this.photos.length - 1 > this.currentPhoto) {
      this.currentPhoto++;
    } else {
      this.currentPhoto = 0;
    }
  }

  prev(): void {
    if (this.currentPhoto > 0) {
      this.currentPhoto--;
    } else {
      this.currentPhoto = this.photos.length - 1;
    }
  }
}
