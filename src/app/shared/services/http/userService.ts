import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../../environments/environment";
import {GetUserDetailsResponse} from "../../../model/response/GetUserDetailsResponse";
import {EditUserRequest} from "../../../model/request/EditUserRequest";
import {AuthService} from "./auth.service";
import {EditUserResponse} from "../../../model/response/EditUserResponse";

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  getUserDetails(username: string): Observable<GetUserDetailsResponse> {
    return this.http
    .get<GetUserDetailsResponse>(`${environment.baseUrl}:${environment.localPort}/users/${username}/details`);
  }

  editUser(request: EditUserRequest): Observable<EditUserResponse> {
    const headers = new HttpHeaders({
      "Username": this.authService.username,
      "Authorization": "Bearer " + this.authService.token,
      "Content-Type": "application/json",
    });
    const options = {headers: headers};

    console.log(request);
    return this.http.patch<EditUserResponse>(`${environment.baseUrl}:${environment.localPort}/users`, request, options);
  }
}
