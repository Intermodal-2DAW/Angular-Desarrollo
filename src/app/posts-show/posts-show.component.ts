import { Component, OnInit } from '@angular/core';
import { IPosts } from '../interfaces/i-posts';
import { PostsService } from '../services/posts.service'

@Component({
  selector: 'app-posts-show',
  templateUrl: './posts-show.component.html',
  styleUrls: ['./posts-show.component.css']
})
export class PostsShowComponent implements OnInit {

  posts: IPosts[] = [];
  newpost: IPosts;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts()
    .subscribe(
      posts => this.posts = posts
    );
    //this.posts = this.postsService.getPosts();
  }

}
