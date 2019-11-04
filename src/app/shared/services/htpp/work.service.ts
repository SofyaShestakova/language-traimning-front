import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Work} from '../../interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({providedIn: 'root'})
export class WorkService {

  constructor(private http: HttpClient) {
  }


  postWork(username: string, work: Work): Observable<any> {

    const headers = new HttpHeaders({
      "username": username,
      "Authorization": "Bearer " + localStorage.getItem("spring-token"),
      "Content-Type": "application/json"
    });
    const options = {headers: headers};


    return this.http.post(`${environment.baseUrl}:${environment.localPort}/works`, work, options);
  }

  getWork(username: string, workId: number): Observable<any> {
    const headers = new HttpHeaders({
      "username": username,
      "Authorization": "Bearer " + localStorage.getItem("spring-token"),
      "Content-Type": "application/json"
    });
    const options = {headers: headers};


    return this.http.get(`${environment.baseUrl}:${environment.localPort}/works/${workId}`,options);
  }

  getText(): Observable<any> {
    return this.http.get(`${environment.baseUrl}:${environment.localPort}/texts/1`);
  }
}
