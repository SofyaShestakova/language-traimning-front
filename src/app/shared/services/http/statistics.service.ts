import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
export class StatisticsService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
  }

  getAverageUserRatingStatistics(username: string, dateFrom: number, snapshotPeriod: number, snapshotsAmount): Observable<any> {
    let params = new HttpParams()
      .set("dateFrom", String(dateFrom))
      .set("snapshotPeriod", String(snapshotPeriod))
      .set("snapshotsAmount", String(snapshotsAmount));
    const options = {params: params};
    return this.http.post(`${environment.baseUrl}:${environment.localPort}/statistics/average-rating/${username}/`, options);
  }
}
