import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from './services/posts-service';
import { HomeComponent } from './views/home/home.component';
import { Paginator2Component } from './components/paginator2/paginator2.component';
import { Observable, Observer } from 'rxjs/Rx';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }
}
