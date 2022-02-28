import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IComments } from '../interfaces/i-comments';
import { IPosts } from '../interfaces/i-posts'
import { IUsers } from '../interfaces/i-users';
import { CommentsService } from '../services/comments.service';
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

  rating : number;

  user: IUsers = {
    name: "",
    lastname: "",
    login: "",
    password: "",
    email: ""
  }

  //user: IUsers;

  comment = {
    content: "",
    ranking: 0,
    post_id: 0,
    user_id: 0,
    user_name: ""
  }


  comentario: string;
  comments: IComments[] = [];

  desabilitaComentario: string = "d-block";
  desabilitaIconos: string = "d-none";
  muestraEliminar: string = "d-none";

  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService, private commentsService: CommentsService, private titleService: Title) { }

  ngOnInit(): void {
    this.post = this.route.snapshot.data['post'];
    this.titleService.setTitle(this.post.title);
    this.token = localStorage.getItem('token');
    this.idUser = localStorage.getItem('id');
    this.rol = localStorage.getItem('rol');
    this.aux = +this.idUser!;


    if(this.token != undefined){
      this.desabilitaComentario = "d-block";

      this.aux = +this.idUser!;
    }else{
      this.desabilitaComentario = "d-none";
    }

    if(this.rol == 'admin'){
      this.muestraEliminar = "d-inline";
    }

    if(this.idUser == this.post.user_id.toString()){
      this.muestraEliminar = "d-inline";
    }

    if(this.comment.user_id == +this.idUser!){
      this.desabilitaIconos = "d-block";
    }

    this.postsService.getUser(this.aux)
    .subscribe(
      user => {this.user = user,
      console.log(this.user)}
    )

    this.commentsService.getComments()
    .subscribe(
      comment => {this.comments = comment,
      () => console.log(this.comments)}
    );

  }

  publicaComentario(){

    this.comment.content = this.comentario;
    console.log(this.comment.content)
    this.comment.ranking = this.rating;
    this.comment.user_id = this.aux;
    this.comment.post_id = this.post.id!;
    this.comment.user_name = this.user.login;
    console.log(this.user.login)

    console.log(this.comment)

    this.commentsService.addComment(this.comment).subscribe(
      comment => {this.comments.push(this.comment),
      this.ngOnInit(),
      this.comentario = "",
      this.rating = 0}
    );

  }

  goBack() {
    this.router.navigate(['/posts/blog']);
  }

  deletePost(){
    this.postsService.deletePost(this.post.id || 0).subscribe(
      () =>this.router.navigate(['/posts/blog'])
    );
  }

  eliminarComentario(id:number){
    this.commentsService.deleteComment(id || 0).subscribe(
      // () =>this.router.navigate(['/posts/blog'])
      () => this.ngOnInit()
    );
  }

  changeRating(id: number){
    this.rating = id;

    console.log(this.rating);
  }

  // filtra(){
  //   this.rankings = this.comments.filter(element => element.ranking),
  //   console.log(this.rankings)
  // }

  /*setRating(ranking: number) {
        error => console.error(error));
    }
  }

  changeRating(rating: number) {
    this.productsService.changeRating(this.product.id, rating).subscribe(
      ok => this.product.rating = rating,
      error => console.error(error));
  }*/


}
