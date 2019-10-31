import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {CurrentUserService} from '../currentUser.service';
import {Message} from '../../interfaces';

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
      text: `Создана новая тема с названием "${themeName}"`
    };

    return this.http.post(`${environment.baseUrl}:${environment.localPort}/forum/topics`, theme, options);
  }

  getMessage(themeId):Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const options = {headers: headers};

    return this.http.get(`${environment.baseUrl}:${environment.localPort}/forum/messages?themeId=${themeId}`, options);
  }

  createMessage(message: Message, themeId): Observable<any>{
    const headers = new HttpHeaders({
      "username": this.user.username,
      "Authorization": "Bearer " + localStorage.getItem("spring-token"),
      "Content-Type": "application/json"
    });
    const options = {headers: headers};


    return this.http.post(`${environment.baseUrl}:${environment.localPort}/forum/messages/${themeId}`, message ,options);
  }
}
