import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {SpringAuthResponse, User} from '../interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient){
  }

  public errors$: Subject<string> = new Subject<string>();

  get token(): string{
    return localStorage.getItem('spring-token');
  }



  login(user: User): Observable<any>{
    const headers = new HttpHeaders({
      "Username": user.username,
      "Password": user.password,
    });

    const options = {headers: headers};

    return this.http.get('http://localhost:8082/auth', options)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  logout(){
    this.setToken(null);
  }

  isAuthenticated(): boolean{
    return !!this.token;
  }

  private setToken(response: SpringAuthResponse | null){
    if(response){
      localStorage.setItem('spring-token', response.token);
    }else {
      localStorage.clear();
    }
  }

  private handleError(error: HttpErrorResponse){
    const status = error.status;
    switch (status) {
      case 404: {
        this.errors$.next("Такого логина не существует");
        break;
      }
      case 401: {
        this.errors$.next("Неверный пароль");
        break;
      }
    }
    return throwError(error);
  }
}
