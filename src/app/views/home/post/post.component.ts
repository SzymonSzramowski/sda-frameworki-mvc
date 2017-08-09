import { NgModel } from '@angular/forms/src/directives';
import { Post } from '../../../model/post';
import { PostService } from '../../../services/posts-service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @ViewChild('title')
  public titleInput: ElementRef;

  @ViewChild('message')
  public messageInput: ElementRef;


  constructor(private postService: PostService) { }

  public ngOnInit() {
  }


  public onSumbit(): void {
    const post: Post = {
      title: this.titleInput.nativeElement.value,
      message: this.messageInput.nativeElement.value,
    };

    this.titleInput.nativeElement.value = '';
    this.messageInput.nativeElement.value = '';

    this.postService.add(post);

  }
}
