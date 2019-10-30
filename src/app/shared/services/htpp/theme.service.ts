import {Injectable} from '@angular/core';
import {Theme} from '../../interfaces';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ThemeService {
  themes: Theme[] = [];

  constructor(private http: HttpClient){
    this.getTheme();
  }

  getTheme(){

    this.http.get(`${environment.baseUrl}:${environment.localPort}/forum/topics`).subscribe((res:any)=>{

      res.themes.map( backTheme => {
        this.themes.push({title: backTheme.themeName
        });
      });
    });
  }

  getById(id: number){
    return this.themes.find( theme => theme.id === id);
  }
}
