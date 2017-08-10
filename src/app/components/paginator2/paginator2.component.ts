import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginator2',
  templateUrl: './paginator2.component.html',
  styleUrls: ['./paginator2.component.css']
})

export class Paginator2Component implements OnInit {
  @Input()
  public currentPage: number = 1;

  @Input()
  public numberOfPages: number = 0;

  @Output()
  public pageChanged: EventEmitter<number> = new EventEmitter();

  constructor() { }

  public ngOnInit() {
  }

  public getButtonNumber(id: number): number {
    if (this.currentPage > 3) {
      return (this.currentPage + id - 2);
    }
    return id;
  }

  public next(event: MouseEvent): void {
    event.preventDefault();
    if (this.currentPage >= this.numberOfPages) {
      return;
    }
    this.pageChanged.emit(this.currentPage + 1);
  }

  public prev(event: MouseEvent): void {
    event.preventDefault();
    if (this.currentPage === 1) {
      return;
    }
    this.pageChanged.emit(this.currentPage - 1);
  }

  public goToPage(event: MouseEvent, page: number): void {
    event.preventDefault();
    this.pageChanged.emit(page);
  }

}
