import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';
import { IPosts } from '../interfaces/i-posts';

@Component({
  selector: 'app-posts-pendientes',
  templateUrl: './posts-pendientes.component.html',
  styleUrls: ['./posts-pendientes.component.css']
})
export class PostsPendientesComponent implements OnInit {

  posts: IPosts[] = [];
  newpost: IPosts;

  token!: string | null;
  idUser!:  string | null;
  rol!: string | null;
  aux!: number ;

  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Blogs Pendientes | Salvador Mira');

    this.postsService.getPosts()
    .subscribe(
      posts => this.posts = posts,
    );

    this.token = localStorage.getItem('token');
    this.idUser = localStorage.getItem('id');
    this.rol = localStorage.getItem('rol');

    console.log(this.posts)
  }

}
