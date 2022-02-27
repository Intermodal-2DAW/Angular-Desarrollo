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

  token!: string | null;
  idUser!:  string | null;
  rol!: string | null;
  aux!: number ;

  muestraEliminar: string = "d-none";
  botonEnd: string = "col-12";

  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {
    this.post = this.route.snapshot.data['post'];
    this.titleService.setTitle(this.post.title);

    this.token = localStorage.getItem('token');
    this.idUser = localStorage.getItem('id');
    this.rol = localStorage.getItem('rol');

    if(this.rol == 'admin'){
      this.muestraEliminar = "d-inline";
      this.botonEnd = "";
    }

    if(this.idUser == this.post.user_id.toString()){
      this.muestraEliminar = "d-inline";
      this.botonEnd = "";

    }

    console.log(this.post)

    /*const id = +this.route.snapshot.params['id'];
    this.postsService.getPost(id).subscribe(
      p => this.post = p
    );*/


  }

  goBack() {
    this.router.navigate(['/posts/blog']);
  }

  deletePost(){
    this.postsService.deletePost(this.post.id || 0).subscribe(
      () =>this.router.navigate(['/posts/blog'])
    );
  }
}
