import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../../environments/environment";
import {GetUserDetailsResponse} from "../../../model/response/GetUserDetailsResponse";
import {EditUserRequest} from "../../../model/request/EditUserRequest";
import {AuthService} from "./auth.service";
import {EditUserResponse} from "../../../model/response/EditUserResponse";

@Injectable({providedIn: 'root'})
export class UserServiceService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  getUserDetails(username: string): Observable<GetUserDetailsResponse> {
    return this.http
      .get<GetUserDetailsResponse>(`${environment.baseUrl}:${environment.localPort}/users/${username}/details`);
  }

  getUserDetailsById(id: number): Observable<GetUserDetailsResponse> {
    let params = new HttpParams().set("userId", String(id));

    return this.http
      .get<GetUserDetailsResponse>(`${environment.baseUrl}:${environment.localPort}/users/details`, {params: params});
  }

  editUser(request: EditUserRequest): Observable<EditUserResponse> {
    const headers = new HttpHeaders({
      "Username": this.authService.username,
      "Authorization": "Bearer " + this.authService.token,
      "Content-Type": "application/json",
    });
    const options = {headers: headers};

    return this.http.patch<EditUserResponse>(`${environment.baseUrl}:${environment.localPort}/users`, request, options);
  }
}
