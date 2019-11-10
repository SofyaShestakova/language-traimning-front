import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {WorkType} from "../../interfaces";

export interface AverageUserRatingStatistics {
  length: number;
  statistics: AverageRating[]
}

export interface AverageRating {
  rating: number;
  snapshotDate: number;
}

export interface UsersWorksAmountStatistics {
  length: number;
  statistics: WorksAmount[];
}

export interface WorksAmount {
  amountOfWorks: number;
  snapshotDate: number;
}

export interface WorkTypesPopularityStatistics {
  length: number;
  statistics: Map<WorkType, WorkTypePopularity[]>
}

export interface WorkTypePopularity {
  worksWritten: number;
  snapshotDate: number;
}

@Injectable({providedIn: 'root'})
export class StatisticsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAverageUserRatingStatistics(username: string, dateFrom: number, snapshotPeriod: number, snapshotsAmount): Observable<AverageUserRatingStatistics> {
    let params = new HttpParams()
      .set("dateFrom", String(dateFrom))
      .set("snapshotPeriod", String(snapshotPeriod))
      .set("snapshotsAmount", String(snapshotsAmount));
    const options = {params: params};

    return this.http.get<AverageUserRatingStatistics>(`${environment.baseUrl}:${environment.localPort}/statistics/average-rating/${username}`, options);
  }

  getUsersWorksAmountStatistics(username: string, dateFrom: number, snapshotPeriod: number, snapshotsAmount): Observable<UsersWorksAmountStatistics> {
    let params = new HttpParams()
      .set("dateFrom", String(dateFrom))
      .set("snapshotPeriod", String(snapshotPeriod))
      .set("snapshotsAmount", String(snapshotsAmount));
    const options = {params: params};

    return this.http.get<UsersWorksAmountStatistics>(`${environment.baseUrl}:${environment.localPort}/statistics/works-amount/${username}`, options);
  }

  getWorkTypesPopularityStatistics(workTypes: WorkType[], dateFrom: number, snapshotPeriod: number, snapshotsAmount): Observable<WorkTypesPopularityStatistics> {
    let params = new HttpParams()
      .set("dateFrom", String(dateFrom))
      .set("snapshotPeriod", String(snapshotPeriod))
      .set("snapshotsAmount", String(snapshotsAmount))
      .set("workTypes", workTypes.join(","));
    const options = {params: params};

    return this.http.get<WorkTypesPopularityStatistics>(`${environment.baseUrl}:${environment.localPort}/statistics/work-types-popularity`, options);
  }
}
