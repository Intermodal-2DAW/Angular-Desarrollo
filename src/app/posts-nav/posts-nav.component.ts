import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-posts-nav',
  templateUrl: './posts-nav.component.html',
  styleUrls: ['./posts-nav.component.css']
})
export class PostsNavComponent implements OnInit {
  token!: string | null;
  idUser!:  string | null;
  rol!: string | null;
  aux!: number ;

  muestraLogin: string = "d-none";
  muestraLogout: string = "d-none";
  muestraPendientes: string = "d-none";

  constructor(private route: ActivatedRoute,private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.idUser = localStorage.getItem('id');
    this.rol = localStorage.getItem('rol');

    if(this.token != undefined){
      this.muestraLogout = "d-inline";

      this.aux = +this.idUser!;
    }else{
      this.muestraLogin = "d-flex";
    }

    if(this.rol == 'admin'){
      this.muestraPendientes = "d-flex";
    }

    //console.log(this.token)
    //console.log(this.idUser)
    //console.log(this.rol)

  }

  onLogout(){
    this.authService.logout();
  }
}
