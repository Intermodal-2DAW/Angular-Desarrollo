import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IUsers } from '../interfaces/i-users'
import { PostsService } from '../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-register',
  templateUrl: './post-register.component.html',
  styleUrls: ['./post-register.component.css']
})
export class PostRegisterComponent implements OnInit {

  newUser = {
    nombre: "",
    apellidos: "",
    nombre_usuario: "",
    contrasena: "",
    email: ""
  }

  item = {
    isActive: false
  }

  //item = <HTMLInputElement> document.getElementById("condicinoes");

  users: IUsers[] = [];
  constructor(private postsService: PostsService, private titleService: Title, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    /*this.postsService.getUsers()
    .subscribe(
      users => this.users = users
    );*/
    this.titleService.setTitle('Registro | Salvador Mira');


  }

  addUser(){
    //this.users.push(this.newUser);

    console.log(this.item)
    if(this.item.isActive){
      this.users.push(this.newUser);

    }
    // Validación del formulario
    (function () {
      'use strict'
      let forms = document.querySelectorAll('.needs-validation')

      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (e: any) {
            if (!form.checkValidity()) {
              e.preventDefault()
              e.stopPropagation()

            }

            form.classList.add('was-validated')
          }, false)
        })
      })()



    /*this.postsService.addUser(this.newUser).subscribe(
      evento => {
      this.router.navigate(['/posts']);

      this.newUser = {
        nombre: "",
        apellidos: "",
        nombre_usuario: "",
        contrasena: "",
        email: ""
      };
      }
    );*/

    console.log(this.newUser.nombre)
    console.log(this.newUser.apellidos)
    console.log(this.newUser.nombre_usuario)
    console.log(this.newUser.contrasena)
    console.log(this.newUser.email)

    console.log(this.users)

  }

}
