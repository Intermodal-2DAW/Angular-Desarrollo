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
  users: IUsers = {
    name: "",
    lastname: "",
    login: "",
    password: "",
    email: ""
  }

  user: IUsers;

  comment = {
    id: 0,
    content: "",
    ranking: 0,
    post_id: 0,
    user_id: 0,
    user_name: ""
  }

  comentario: string;
  comments: IComments[] = [];

  muestraEliminar: string = "d-none";

  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService, private commentsService: CommentsService, private titleService: Title) { }

  ngOnInit(): void {
    this.post = this.route.snapshot.data['post'];
    this.titleService.setTitle(this.post.title);

    this.token = localStorage.getItem('token');
    this.idUser = localStorage.getItem('id');
    this.rol = localStorage.getItem('rol');
    this.aux = +this.idUser!;

    if(this.rol == 'admin'){
      this.muestraEliminar = "d-inline";
    }

    if(this.idUser == this.post.user_id.toString()){
      this.muestraEliminar = "d-inline";
    }

    this.postsService.getUser(this.aux)
    .subscribe(
      user => {this.user = user,
      console.log(this.user)}
    )

    this.commentsService.getComments()
    .subscribe(
      comment =>
        {
        console.log(comment)
        },
        (error) => console.error(error),
        () => console.log(this.comments)
    );

  }

  publicaComentario(){
    console.log(this.user)

    this.comentario = this.comment.content;
    console.log(this.comment.content)
    this.comment.ranking = 3;
    this.comment.user_id = this.aux;
    this.comment.post_id = this.post.id!;

    this.commentsService.addComment(this.comment).subscribe(
      comment => this.comments.push(this.comment)
    );

    this.ngOnInit();

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
