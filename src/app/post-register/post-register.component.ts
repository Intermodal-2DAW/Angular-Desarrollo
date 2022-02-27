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

  checked: boolean = false;

  users: IUsers[] = [];

  constructor(private postsService: PostsService, private titleService: Title, private route: ActivatedRoute, private router: Router,) { }

  ngOnInit(): void {
    this.titleService.setTitle('Registro | Salvador Mira');

  }

  valida(){
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function () {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
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
  }

  addUser(){
    this.valida();
    console.log(this.newUser)

    if(this.checked){
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
      this.checked = false;
    }

  }

}
