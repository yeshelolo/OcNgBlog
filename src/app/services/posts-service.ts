import { Injectable } from '@angular/core';
import { Post } from '../entites/post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  posts: Post[];
  postSubject = new Subject<Post[]>();

  constructor() {
    this.posts = [
      new Post(
        'Mon Premier Post',
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius possimus quidem voluptas dolor nesciunt neque harum vitae ab dolores repellendus corporis architecto hic officiis voluptatem, ducimus nulla quia perferendis perspiciatis!',
        2),
      new Post(
        'Mon Second Post',
        'Lorem2 ipsum dolor sit amet, consectetur adipisicing elit. Eius possimus quidem voluptas dolor nesciunt neque harum vitae ab dolores repellendus corporis architecto hic officiis voluptatem, ducimus nulla quia perferendis perspiciatis!',
        -2),
      new Post(
        'Mon Troisième Post',
        'Lorem3 ipsum dolor sit amet, consectetur adipisicing elit. Eius possimus quidem voluptas dolor nesciunt neque harum vitae ab dolores repellendus corporis architecto hic officiis voluptatem, ducimus nulla quia perferendis perspiciatis!',
        0),
    ];
  }

  getPosts() {
    return this.posts;
  }

  createPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post: Post) {
    const index = this.posts.findIndex(
      (item) => {
        if (item === post) {
          return true;
        }
      }
    );
    this.posts.splice(index, 1);
    this.emitPosts();
  }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

}
