import { error } from 'util';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Post } from '../model/post';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
    public posts: Array<Post> = new Array();

    constructor(private http: Http) {
        this.http.get('http://localhost:3000/wall/').subscribe(response => {
            if (response.ok === true) {
                this.posts = response.json();
            }
        }, error => console.log(error));
    }

    public add(post: Post): void {
        this.save(post).subscribe(response => {
            if (response.ok && response.json().success === true) {
                this.posts.push(post);
            }
        }, error => console.log(error));
    }

    public save(post: Post): Observable<Response> {
        return this.http.post('http://localhost:3000/wall/', post);
    }
}
