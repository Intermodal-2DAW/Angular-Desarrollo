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

  postsFiltrados: IPosts[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Blogs Pendientes | Salvador Mira');

    this.postsService.getPosts()
    .subscribe(
      post =>{
        this.posts = post,
        this.filtra()}
    );

    this.token = localStorage.getItem('token');
    this.idUser = localStorage.getItem('id');
    this.rol = localStorage.getItem('rol');

    console.log(this.posts)
  }

  filtra(){
    this.postsFiltrados = this.posts.filter(element => element.ok == 0);
    console.log(this.postsFiltrados)
  }

  actualizaPosts(post : IPosts){
    this.posts.push(post);
    this.ngOnInit();
  }

  eliminaPost(id: number){
    this.postsService.deletePost(id).subscribe(
      () => this.ngOnInit()
    );
  }
}
