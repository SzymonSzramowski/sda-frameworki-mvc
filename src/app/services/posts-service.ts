import { Post } from '../model/post';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
    public posts: Array<Post> = new Array();

    public add(post: Post): void {
        this.posts.push(post);
    }
}
