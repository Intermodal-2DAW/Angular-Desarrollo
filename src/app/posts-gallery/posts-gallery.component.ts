import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IPosts } from '../interfaces/i-posts';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-gallery',
  templateUrl: './posts-gallery.component.html',
  styleUrls: ['./posts-gallery.component.css']
})
export class PostsGalleryComponent implements OnInit {
  posts: IPosts[] = [];

  constructor(private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Galeria | Salvador Mira');

    this.postsService.getPosts()
    .subscribe(
      post =>
        this.posts = post
    );
  }

}
