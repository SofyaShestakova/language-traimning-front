import {Injectable} from '@angular/core';
import {Theme} from '../../interfaces';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {AuthService} from './auth.service';
import {CurrentUserService} from '../currentUser.service';

@Injectable({providedIn: 'root'})
export class ThemeService {

  constructor(private http: HttpClient, private user: CurrentUserService){
    this.getTheme();
  }

  getTheme(): Observable<any>{
    return this.http.get(`${environment.baseUrl}:${environment.localPort}/forum/topics`);
  }

  createTheme(themeName: string): Observable<any>{

    const headers = new HttpHeaders({
      "username": this.user.username,
      "Authorization": "Bearer " + localStorage.getItem("spring-token"),
      "Content-Type": "application/json"
    });
    const options = {headers: headers};
    const theme = {
      themeName: themeName,
      text: ""
    };

    return this.http.post(`${environment.baseUrl}:${environment.localPort}/forum/topics`, theme, options);
  }

  getById(id: number){
    return null;// this.themes.find( theme => theme.id === id);
  }
}
