import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {Assesment, User} from "../interfaces";
import {CurrentUserService} from "./currentUser.service";

@Injectable({providedIn: 'root'})
export class AssesmentService {
  constructor(private http: HttpClient,private user: CurrentUserService) {
  }

  createAssesment(workId:number,mark:number,comment:string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("spring-token"),
      "Content-Type": "application/json",
      "username": this.user.username,
    });
    const options = {headers: headers};
    let body = {mark:mark, comment:comment,workId:workId};
    return this.http.post(`${environment.baseUrl}:${environment.localPort}/assessments` +  body, options);
  }
}
