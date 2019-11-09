import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {AuthenticationResponse} from '../../interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {AuthCredentials} from "../../../model/request/AuthCredentials";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  public errors$: Subject<string> = new Subject<string>();

  get token(): string {
    return localStorage.getItem('auth-token');
  }

  get username(): string {
    return localStorage.getItem('username');
  }

  register(credentials: AuthCredentials): Observable<any> {
    const headers = new HttpHeaders({
      "Username": credentials.username,
      "Password": credentials.password,
      "Content-Type": "application/json"
    });

    const options = {headers: headers};

    return this.http.post(`${environment.baseUrl}:${environment.localPort}/auth`, credentials, options).pipe(
      catchError(this.handleError.bind(this))
    )
  }

  login(credentials: AuthCredentials): Observable<any> {
    const headers = new HttpHeaders({
      "Username": credentials.username,
      "Password": credentials.password,
      "Content-Type": "application/json"
    });

    const options = {headers: headers};

    return this.http.get(`${environment.baseUrl}:${environment.localPort}/auth`, options)
      .pipe(
        tap(this.setCredentials),
        catchError(this.handleError.bind(this))
      )
  }

  logout() {
    this.setCredentials(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setCredentials(response: AuthenticationResponse | null) {
    if (response) {
      localStorage.setItem('username', response.username);
      localStorage.setItem('auth-token', response.token);
    } else {
      localStorage.clear();
    }
  }

  private handleError(error: HttpErrorResponse) {
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
      case 400: {
        this.errors$.next("Логин уже существует");
      }
    }
    return throwError(error);
  }
}
