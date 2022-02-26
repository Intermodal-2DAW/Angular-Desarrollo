import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { IToken } from '../interfaces/i-token';
import { PostsService } from '../services/posts.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent implements OnInit {
  token! : string | null;

  login: IToken = {
    login: "",
    password: ""
  }

  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService, private authService: AuthService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login | Salvador Mira');

    this.token = localStorage.getItem('token');
    console.log(this.token)

    if(this.token != undefined){
       this.router.navigate(['/posts'])
    }
  }

  compruebaUsuario(){

    this.authService.login(this.login).subscribe(
      (res) => console.log('login'),
        () => {
          this.router.navigate(['/posts/blog'])
        }

    )

    this.login = {
      login: "",
      password: ""
    }
  }

}
