import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IPosts } from '../interfaces/i-posts';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-item-pendiente',
  templateUrl: './post-item-pendiente.component.html',
  styleUrls: ['./post-item-pendiente.component.css']
})
export class PostItemPendienteComponent implements OnInit {

  @Input() newpost: IPosts;
  @Output() actualiza = new EventEmitter<IPosts>();

  postModificado: IPosts;

  newPostModificado: IPosts = {
    id: 0,
    title: "",
    image: "",
    description: "",
    user_id: 1,
    ok: 1
  }

  idUser: string | null;

  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {
    this.idUser = localStorage.getItem('id');

  }

  aceptaPost(){
    this.newPostModificado = {
      id: this.newpost.id,
      title: this.newpost.title,
      image: this.newpost.image,
      description: this.newpost.description,
      user_id: +this.idUser!,
      ok: 1
    }

    console.log(this.idUser)
    console.log(this.newpost.id)

    this.postsService.modificarPost(this.newpost.id! ,this.newPostModificado).subscribe(
      post => {this.postModificado,
      this.actualiza.emit(this.newPostModificado)}
    );

    console.log(this.newPostModificado)
  }

  deletePost(){
    this.postsService.deletePost(this.newpost.id || 0).subscribe();
  }

}
