import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {AuthService} from "./http/auth.service";

@Injectable({providedIn: 'root'})
export class AssessmentService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  createAssessment(workId: number, mark: number, comment: string): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("auth-token"),
      "Content-Type": "application/json",
      "Username": this.authService.username,
    });
    const options = {headers: headers};
    let body = {mark: mark, comment: comment, workId: workId};

    console.log(body);
    return this.http.post(`${environment.baseUrl}:${environment.localPort}/assessments`, body, options);
  }
}
