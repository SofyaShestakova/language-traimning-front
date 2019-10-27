import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SpringAuthResponse, User} from '../interfaces';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient){
  }

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
        tap(this.setToken)
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
}
