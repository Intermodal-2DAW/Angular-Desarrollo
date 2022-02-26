import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IPosts } from '../interfaces/i-posts'
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: IPosts;
  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {

    /*const id = +this.route.snapshot.params['id'];
    this.postsService.getPost(id).subscribe(
      p => this.post = p
    );*/

    this.post = this.route.snapshot.data['post'];

    this.titleService.setTitle(this.post.title);
  }

  goBack() {
    this.router.navigate(['/posts/blog']);
  }
}
