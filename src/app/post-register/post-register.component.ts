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
  //item = <HTMLInputElement> document.getElementById("condicinoes");
  crear:boolean = false;
  users: IUsers[] = [];
  constructor(private postsService: PostsService, private titleService: Title, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    /*this.postsService.getUsers()
    .subscribe(
      users => this.users = users
    );*/
    this.titleService.setTitle('Registro | Salvador Mira');


  }

  valida() {
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
  }

  addUser(){
    // Validación del formulario


    if(this.crear){
      this.postsService.addUser(this.newUser).subscribe(
        evento => {
        this.users.push(this.newUser);
        this.router.navigate(['/posts']);

        this.newUser = {
          nombre: "",
          apellidos: "",
          nombre_usuario: "",
          contrasena: "",
          email: ""
        };
        }
      );
    }


    console.log(this.users)

  }

}
