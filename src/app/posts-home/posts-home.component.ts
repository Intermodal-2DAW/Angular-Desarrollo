import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-home',
  templateUrl: './posts-home.component.html',
  styleUrls: ['./posts-home.component.css']
})
export class PostsHomeComponent implements OnInit {

  constructor(private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Home | Salvador Mira');
  }

}
