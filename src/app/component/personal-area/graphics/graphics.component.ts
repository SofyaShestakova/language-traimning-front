import {Component, OnInit} from '@angular/core';
import {StatisticsService} from "../../../shared/services/http/statistics.service"
import {UserServiceService} from "../../../shared/services/http/userService.service";
import {AuthService} from "../../../shared/services/http/auth.service";
import * as _ from "lodash";

class Chart {

  constructor(
    public title,
    public type,
    public data,
    public columnNames,
    public options
  ) {
  }
}

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  number_works: Chart = new Chart('Количество работы',
    'LineChart', [
      ["Январь", 7],
      ["Февраль", 6],
      ["Март", 9],
      ["Апрель", 14],
      ["Май", 18],
      ["Июнь", 21],
      ["Июль", 25],
      ["Август", 26],
      ["Сентябрь", 23],
      ["Октябрь", 18],
      ["Ноябрь", 13],
      ["Декабрь", 9],
    ], ['месяц', 'количество'], {});


  average: Chart = new Chart('Средний балл',
    'LineChart', [
      ["Январь", 25],
      ["Февраль", 26],
      ["Март", 34],
      ["Апрель", 34],
      ["Май", 23],
      ["Июнь", 38],
      ["Июль", 40],
      ["Август", 55],
      ["Сентябрь", 58],
      ["Октябрь", 67],
      ["Ноябрь", 84],
      ["Декабрь", 88],
    ], ['месяц', 'балл'], {});


  constructor(
    private statisticsService: StatisticsService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.loadUserWorksAmountStatistics();
    this.loadAverageUsersMarkStatistics();
  }

  loadAverageUsersMarkStatistics() {
    let encountDays = 7;

    let nowDate = new Date();
    let snapshotsAmount = 24 * encountDays + nowDate.getHours();
    let snapshotPeriod = 1000 * 60 * 60;
    let dateFrom = nowDate.getTime() - 1000 * 60 * 60 * 24 * encountDays;
    // let dateFrom = 1572987600000;
    this.statisticsService.getAverageUserRatingStatistics(this.authService.username, dateFrom, snapshotPeriod, snapshotsAmount)
      .subscribe(result => {
        this.average.data = _.map(result.statistics, statistic => [
          ((snapshotDate) => {
            let date = new Date(snapshotDate);
            return `${date.getDate() + 1}/${date.getMonth() + 1} ${date.getHours()}:00`
          })(statistic.snapshotDate),
          statistic.rating
        ])
      })
  }

  loadUserWorksAmountStatistics() {
    let encountDays = 7;

    let nowDate = new Date();
    let snapshotsAmount = 24 * encountDays + nowDate.getHours();
    let snapshotPeriod = 1000 * 60 * 60;
    let dateFrom = nowDate.getTime() - 1000 * 60 * 60 * 24 * encountDays;
    // let dateFrom = 1572987600000;
    this.statisticsService.getUsersWorksAmountStatistics(this.authService.username, dateFrom, snapshotPeriod, snapshotsAmount)
      .subscribe(result => {
        this.number_works.data = _.map(result.statistics, statistic => [
          ((snapshotDate) => {
            let date = new Date(snapshotDate);
            return `${date.getDate() + 1}/${date.getMonth() + 1} ${date.getHours()}:00`
          })(statistic.snapshotDate),
          statistic.amountOfWorks
        ])
      })
  }
}
