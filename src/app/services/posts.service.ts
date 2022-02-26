import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { IPosts } from '../interfaces/i-posts';
import { IUsers } from '../interfaces/i-users';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PostResponse, tokenResponse } from '../interfaces/i-response';
import { IToken } from '../interfaces/i-token';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postURL = 'http://localhost:8000/api/posts';
  private loginURL = 'http://localhost:8000/api/login';
  private registerURL = 'http://localhost:8000/api/user';

  constructor(private http: HttpClient) { }

  // Obtener todos los posts
  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this.postURL);
  }

  // Obtener todos los usuarios
  /*getUsers(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>('posts');
  }*/

  getPostToken(token:IToken): Observable<string> {
    /*let options= {
      headers: new HttpHeaders().set('Authorization',localStorage.getItem('token'))
    };*/
    return this.http.post<tokenResponse>(this.loginURL, token).pipe(
      catchError((resp: HttpErrorResponse) => throwError(`Error insertando post!. Código de servidor ${resp.status}. Mensaje: ${resp.message}`)),
      map(resp => {
        return resp.token;
      })
    )
  }

  // Añadir nuevo post al blog
  addPost(post: IPosts): Observable<IPosts> {
    return this.http.post<PostResponse>(this.postURL, post)
    .pipe(
      catchError((resp: HttpErrorResponse) => throwError(`Error insertando post!. Código de servidor ${resp.status}. Mensaje: ${resp.message}`)),
      map(resp => {
        return resp.post;
      })
    )
   }

  // Añadir nuevo usuario
  addUser(user: IUsers): Observable<IUsers> {
    return this.http.post<IUsers>(this.registerURL, user);
  }

  // Eliminar un post
  deletePost(idPost: number): Observable<void> {
    return this.http.delete<void>('eventos'+`/${idPost}`);
  }

  // Obtener un post concreto para mostrarlo en detail
  getPost(id: number): Observable<IPosts> {
    return this.http.get<IPosts>(this.postURL +`/${id}`);
  }

  /*getPosts(): IPosts[] {
    return [{
      id: 1,
      title: 'Image 1',
      image: 'assets/imagen1.jpg',
      description: 'This is my first image'
      },{
      id: 2,
      title: 'Image 2',
      image: 'assets/imagen2.png',
      description: 'This is my second image'
    }];
  };*/

}
