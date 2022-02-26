import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-blog',
  templateUrl: './posts-blog.component.html',
  styleUrls: ['./posts-blog.component.css']
})
export class PostsBlogComponent implements OnInit {

  constructor(private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Blog | Salvador Mira');
  }

}
