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

  token!: string | null;
  idUser!:  string | null;
  rol!: string | null;
  aux!: number ;

  postsFiltrados: IPosts[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts()
    .subscribe(
      post =>{
        this.posts = post,
        console.log(this.posts),
        this.filtra()}
    );

    this.token = localStorage.getItem('token');
    this.idUser = localStorage.getItem('id');
    this.rol = localStorage.getItem('rol');
    //this.posts = this.postsService.getPosts();
  }

  filtra(){
    console.log(this.posts),
    this.postsFiltrados = this.posts.filter(element => element.ok == 1),
    console.log(this.postsFiltrados)
  }

}
