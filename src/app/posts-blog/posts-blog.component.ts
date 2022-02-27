import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-posts-blog',
  templateUrl: './posts-blog.component.html',
  styleUrls: ['./posts-blog.component.css']
})
export class PostsBlogComponent implements OnInit {
  token! : string | null;
  idUser!:  string | null;
  aux!: number ;

  muestraAnadir: string = "d-none";

  constructor(private route: ActivatedRoute,private router: Router, private postsService: PostsService, private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('Blog | Salvador Mira');

    this.token = localStorage.getItem('token');
    this.idUser  = localStorage.getItem('id');
    console.log(this.token)

    if(this.token != undefined){
      this.muestraAnadir = "d-inline";

      this.aux = +this.idUser!;
    }else{
      this.muestraAnadir = "d-none";
    }
  }


}
