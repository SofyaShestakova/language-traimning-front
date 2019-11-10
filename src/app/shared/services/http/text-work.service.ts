import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {BankTextFilter} from "../../../model/request/BankTextFilter";
import {GetTextsResponse} from "../../../model/response/GetTextsResponse";
import {CreateWorkRequest} from "../../../model/request/CreateWorkRequest";
import {AuthService} from "./auth.service";
import {Work} from "../../interfaces";
import {WorkFilter} from "../../../model/request/WorkFilter";
import {GetWorksResponse} from "../../../model/response/GetWorksResponse";

@Injectable({providedIn: 'root'})
export class TextWorkService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  createWork(request: CreateWorkRequest): Observable<any> {
    const headers = new HttpHeaders({
      "username": this.authService.username,
      "Authorization": "Bearer " + this.authService.token,
      "Content-Type": "application/json"
    });
    const options = {headers: headers};

    return this.http.post(`${environment.baseUrl}:${environment.localPort}/works`, request, options);
  }

  getWork(workId: number): Observable<Work> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const options = {headers: headers};

    return this.http.get<Work>(`${environment.baseUrl}:${environment.localPort}/works/${workId}`, options);
  }

  getWorks(filter: WorkFilter): Observable<GetWorksResponse> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const options = {headers: headers};
    return this.http.post<GetWorksResponse>(`${environment.baseUrl}:${environment.localPort}/works/filter`, filter, options);
  }

  getTexts(filter: BankTextFilter): Observable<GetTextsResponse> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const options = {headers: headers};

    return this.http.post<GetTextsResponse>(`${environment.baseUrl}:${environment.localPort}/texts/filter`, filter, options);
  }
}
