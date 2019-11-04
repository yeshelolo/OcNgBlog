import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../entites/post';
import { PostsService } from '../services/posts-service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  private postForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmitForm() {
    const formValue = this.postForm.value;
    const post = new Post(
      formValue['title'],
      formValue['content'],
      0
    );
    this.postsService.createPost(post);
    this.router.navigate(['/posts']);
  }

}
