import { LoginService } from '../../services/login-service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from '../../services/posts-service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public currentPageInHome: number = 1;

  constructor(public postService: PostService,
    private route: ActivatedRoute,
    private router: Router, public loginService: LoginService) {
  }

  public ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params['page']) {
        this.currentPageInHome = +params['page'];
      }
    });
  }

  public onPageChanged2(page: number): void {
    this.currentPageInHome = page;
    this.router.navigate(['home', page]);
  }

  public isVisible(index: number): boolean {
    const minIndex: number = (this.currentPageInHome - 1) * 5;
    const maxIndex: number = this.currentPageInHome * 5;
    if (index + 1 > maxIndex || index < minIndex) {
      return false;
    }
    return true;
  }

  public getNumberOfPages(): number {
    return Math.ceil(this.postService.posts.length / 5);
  }

}
