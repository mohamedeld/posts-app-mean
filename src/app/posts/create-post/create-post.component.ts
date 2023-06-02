import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Posts } from 'src/app/interfaces/posts';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent {
  enteredTitle: string = '';
  enteredContent: string = '';
  constructor(public postService: PostService) {}
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Posts = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postService.addPost(post);
    form.resetForm();
  }
}
