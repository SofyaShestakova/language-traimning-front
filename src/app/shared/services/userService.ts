import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../../../environments/environment";
import {User} from "../interfaces";

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {
  }

  patchUserDetails(user: User): Observable<any> {
    const headers = new HttpHeaders({
      "Authorization": "Bearer " + localStorage.getItem("spring-token"),
      "Content-Type": "application/json",
    });
    const options = {headers: headers};

    let username = user.username;
    let body = {screenName: user.screenName, bio: user.bio};
    return this.http.patch(`${environment.baseUrl}:${environment.localPort}/users/` + username, body, options);
  }
}
