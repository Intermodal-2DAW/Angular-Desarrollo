import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IUsers } from '../interfaces/i-users'
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-register',
  templateUrl: './post-register.component.html',
  styleUrls: ['./post-register.component.css']
})
export class PostRegisterComponent implements OnInit {

  newUser = {
    name: "",
    lastname: "",
    login: "",
    password: "",
    email: ""
  }

  crear:boolean = false;

  users: IUsers[] = [];

  constructor(private postsService: PostsService, private titleService: Title, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    this.titleService.setTitle('Registro | Salvador Mira');

  }

  addUser(){
    console.log(this.newUser)

    this.postsService.addUser(this.newUser).subscribe(
      user => {this.users.push(this.newUser),
      this.router.navigate(['/posts'])}
    );

    this.newUser = {
      name: "",
      lastname: "",
      login: "",
      password: "",
      email: ""
    };

    //console.log(this.users)

  }

}
