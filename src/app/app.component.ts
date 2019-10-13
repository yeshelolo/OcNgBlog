import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'POSTS';
  posts = [
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
export class Post {
    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title: string, content: string, loveIts: number) {
      this.title = title;
      this.content = content;
      this.loveIts = loveIts;
      this.created_at = new Date();
    }
}
