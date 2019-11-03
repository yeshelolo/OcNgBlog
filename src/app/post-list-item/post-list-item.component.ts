import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../entites/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  getPostClass() {
    return {
      'list-group-item-success': this.post.loveIts > 0,
      'list-group-item-danger': this.post.loveIts < 0,
    }
  }

  getTextClass() {
    return {
      'text-success': this.post.loveIts > 0,
      'text-danger': this.post.loveIts < 0,
    }
  }

  onBtnLoveClick() {
    this.post.loveIts++;
  }

  onBtlDontClick() {
    this.post.loveIts--;
  }

}
