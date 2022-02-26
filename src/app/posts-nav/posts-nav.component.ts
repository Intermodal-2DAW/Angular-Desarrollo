import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-posts-nav',
  templateUrl: './posts-nav.component.html',
  styleUrls: ['./posts-nav.component.css']
})
export class PostsNavComponent implements OnInit {

  constructor(private authService: AuthService){}

  ngOnInit(): void {
  }

  onLogout(){
    this.authService.logout();
  }
}
