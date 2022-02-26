import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IContact } from '../interfaces/i-contact'
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-contact',
  templateUrl: './posts-contact.component.html',
  styleUrls: ['./posts-contact.component.css']
})
export class PostsContactComponent implements OnInit {

  newContact = {
    nombre: "",
    email: "",
    texto: ""
  }

  contacts: IContact[] = [];

  constructor(private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Contacto | Salvador Mira');
  }

  nuevoContacto(){
    this.contacts.push(this.newContact);

    this.newContact = {
      nombre: "",
      email: "",
      texto: ""
    }
  }

}
