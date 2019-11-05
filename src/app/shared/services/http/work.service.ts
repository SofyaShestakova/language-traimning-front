import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {BankTextFilter} from "../../../model/request/WorksFilter";
import {GetTextsResponse} from "../../../model/response/GetTextsResponse";
import {CreateWorkRequest} from "../../../model/request/CreateWorkRequest";
import {CurrentUserService} from "../currentUser.service";

@Injectable({providedIn: 'root'})
export class WorkService {

  constructor(private http: HttpClient, private userService: CurrentUserService) {
  }

  createWork(request: CreateWorkRequest): Observable<any> {
    const headers = new HttpHeaders({
      "username": this.userService.username,
      "Authorization": "Bearer " + localStorage.getItem("auth-token"),
      "Content-Type": "application/json"
    });
    const options = {headers: headers};

    return this.http.post(`${environment.baseUrl}:${environment.localPort}/works`, request, options);
  }

  getWork(workId: number): Observable<any> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const options = {headers: headers};

    return this.http.get(`${environment.baseUrl}:${environment.localPort}/works/${workId}`, options);
  }

  getTexts(filter: BankTextFilter): Observable<GetTextsResponse> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    const options = {headers: headers};

    return this.http.post<GetTextsResponse>(`${environment.baseUrl}:${environment.localPort}/texts/filter`, filter, options);
  }
}
