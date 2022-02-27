import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { IPosts } from '../interfaces/i-posts';
import { IUsers } from '../interfaces/i-users';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PostResponse, UserResponse, CommentsResponse, tokenResponse } from '../interfaces/i-response';
import { IToken } from '../interfaces/i-token';
import { IComments } from '../interfaces/i-comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private commentsURL = 'http://localhost:8000/api/comments';
  //private commentsURL = 'https://admindb.smira.daw:4444/api/comments';

  constructor(private http: HttpClient) { }

  // Obtener todos los comentarios
  getComments(): Observable<CommentsResponse> {
    return this.http.get<CommentsResponse>(this.commentsURL)
    .pipe(
      map(
        res => {
          return res;
        }
      )
    )
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


}
