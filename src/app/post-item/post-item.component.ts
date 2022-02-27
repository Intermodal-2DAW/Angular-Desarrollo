import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../interfaces/i-posts';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() newpost: IPosts;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {

  }

}
