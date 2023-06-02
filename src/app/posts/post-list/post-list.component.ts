import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Posts } from 'src/app/interfaces/posts';
import { PostService } from 'src/app/services/post.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Posts[] = [];
  private postSub: Subscription = new Subscription();

  constructor(public postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
    this.postSub = this.postService
      .getPostUpdated()
      .subscribe((posts: Posts[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
