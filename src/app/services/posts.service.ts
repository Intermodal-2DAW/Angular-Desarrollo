import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { IPosts } from '../interfaces/i-posts';
import { IUsers } from '../interfaces/i-users';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PostResponse, UserResponse, tokenResponse } from '../interfaces/i-response';
import { IToken } from '../interfaces/i-token';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postURL = 'https://smira.daw:5555/api/posts';
  private registerURL = 'https://smira.daw:5555/api/user';

  constructor(private http: HttpClient) { }

  // Obtener todos los posts
  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this.postURL);
  }

  // Obtener un post concreto para mostrarlo en detail
  getPost(id: number): Observable<IPosts> {
    return this.http.get<IPosts>(this.postURL +`/${id}`);
  }

  // Añadir nuevo post al blog
  addPost(post: IPosts): Observable<IPosts> {
    return this.http.post<PostResponse>(this.postURL, post)
    .pipe(
      catchError((resp: HttpErrorResponse) => throwError(`Error insertando post!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)),
      map(resp => {
        return resp.post;
      })
    )
  }

  // Modificar post
  modificarPost(id: number, post: IPosts): Observable<IPosts>  {
    return this.http.put<PostResponse>(`${this.postURL}/${id}`, post).pipe(
      catchError((resp: HttpErrorResponse) => throwError(`Error modificando post!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)),
      map(resp => {
        return resp.post;
      })
    );
  }

  // Eliminar un post
  deletePost(idPost: number): Observable<void> {
    return this.http.delete<void>(`${this.postURL}/${idPost}`);
  }

  // Añadir nuevo usuario
  addUser(user: IUsers): Observable<IUsers> {
    return this.http.post<UserResponse>(this.registerURL, user)
    .pipe(
      catchError((resp: HttpErrorResponse) => throwError(`Error insertando usuario!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)),
      map(resp => {
        return resp.user;
      })
    )
  }

  // Obtener un usuario concreto por id
  getUser(id: number): Observable<IUsers> {
    return this.http.get<IUsers>(this.registerURL +`/${id}`);
  }

}
