import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IPosts } from '../interfaces/i-posts';
import { IUsers } from '../interfaces/i-users';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {

  token! : string | null;
  idUser!:  string | null;
  aux!: number ;
  User! : IUsers;

  UserAuth: IUsers = {
    nombre: "",
    apellidos: "",
    nombre_usuario: "",
    contrasena: "",
    email: ""
  }

  newPost = {
    title: "",
    image: "",
    description: "",
    user_id: +this.idUser!,
    ok: 0
  }

  posts: IPosts[] = [];

  constructor(private route: ActivatedRoute,private router: Router, private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Añadir Blog | Salvador Mira');

    this.token = localStorage.getItem('token');
    this.idUser  = localStorage.getItem('id');

  }

  addPost(){
    this.postsService.addPost(this.newPost).subscribe(
      post =>  this.posts.push(this.newPost),
      error => console.log(error),
      () => this.router.navigate(['/posts/blog'])
    );

    this.newPost = {
      title: "",
      image: "",
      description: "",
      user_id: +this.idUser!,
      ok: 0
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(fileInput.files[0]);
      reader.addEventListener('loadend', e => {
        this.newPost.image = reader.result as string;
    });
  }

}
