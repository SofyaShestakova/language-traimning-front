import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {AuthService} from "./http/auth.service";
import {CreateAssessmentRequest} from "../../model/request/CreateAssessmentRequest";
import {CreateAssessmentResponse} from "../../model/response/CreateAssessmentResponse";

@Injectable({providedIn: 'root'})
export class AssessmentService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  createAssessment(workId: number, mark: number, comment: string): Observable<CreateAssessmentResponse> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("auth-token"),
      "Username": this.authService.username,
      "Content-Type": "application/json",
    });
    const options = {headers: headers};
    let body = new CreateAssessmentRequest(workId, mark, comment);

    console.log(body);
    return this.http.post<CreateAssessmentResponse>(`${environment.baseUrl}:${environment.localPort}/assessments`, body, options);
  }
}
