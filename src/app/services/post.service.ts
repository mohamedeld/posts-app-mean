import { Injectable } from '@angular/core';
import { Posts } from '../interfaces/posts';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}
  private posts: Posts[] = [];
  private updatePosts = new Subject<Posts[]>();

  getPosts() {
    return [...this.posts];
  }
  getPostUpdated() {
    return this.updatePosts.asObservable();
  }
  addPost(post: Posts) {
    this.posts.push(post);
    this.updatePosts.next([...this.posts]);
  }
}
