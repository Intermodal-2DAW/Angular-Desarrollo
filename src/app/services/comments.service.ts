import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { IPosts } from '../interfaces/i-posts';
import { IUsers } from '../interfaces/i-users';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PostResponse, UserResponse, CommentsResponse, OkResponse, tokenResponse } from '../interfaces/i-response';
import { IToken } from '../interfaces/i-token';
import { IComments } from '../interfaces/i-comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

 
  private commentsURL = 'https://smira.daw:5555/api/comments';

  constructor(private http: HttpClient) { }

  // Obtener todos los comentarios
  getComments(): Observable<IComments[]> {
    return this.http.get<IComments[]>(this.commentsURL);
  }

  // Añadir nuevo comentario
  addComment(comment: IComments): Observable<IComments> {
    return this.http.post<CommentsResponse>(this.commentsURL, comment)
    .pipe(
      catchError((resp: HttpErrorResponse) => throwError(`Error insertando comentario!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)),
      map(resp => {
        return resp.comments;
      })
    )
  }

  deleteComment(comment: number): Observable<void> {
    return this.http.delete<void>(`${this.commentsURL}/${comment}`);
  }

  setRating(id: number, ranking: IComments): Observable<IComments> {
    return this.http.put<OkResponse>(`${this.commentsURL}/${id}`,{ranking})
    .pipe(
      map(resp => resp.ranking),
      catchError((resp: HttpErrorResponse) => throwError(`Error cambiando puntuación!. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`))

    );
  }



}
