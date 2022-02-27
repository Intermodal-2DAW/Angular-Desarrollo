import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { IPosts } from '../interfaces/i-posts';
import { IUsers } from '../interfaces/i-users';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PostResponse, tokenResponse, AuthResponse } from '../interfaces/i-response';
import { IToken } from '../interfaces/i-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginURL = 'http://localhost:8000/api/login';

  constructor(private http: HttpClient) { }

   //Funcion de login
   login(authData:IToken): Observable<AuthResponse | void>{
    return this.http.post<AuthResponse>(this.loginURL, authData)
    .pipe(
      map((res: AuthResponse)=>{

        console.log(res.token)
        console.log(res.id)
        console.log(res.rol)
        this.saveToken(res.token,res.id,res.rol)
        //this.loggedIn.next(true)
        return res;
      })
    )
  }

  private saveToken(token:string,id: string,rol:string): void{
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('rol', rol);
  }

  logout(): void{
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('rol');

    //this.loggedIn.next(false)
    console.log('Token eliminado correctamente!')
  }
}
