import {Component, OnInit} from '@angular/core';
import {StatisticsService, WorkTypePopularity} from "../../../shared/services/http/statistics.service";
import {WorkType} from "../../../shared/interfaces";
import * as _ from "lodash";

class Chart {
  title;
  type;
  data;
  columnNames;
  options;

  constructor(title, type, data, columnNames, options) {
    this.title = title;
    this.type = type;
    this.data = data;
    this.columnNames = columnNames;
    this.options = options;
  }
}

@Component({
  selector: 'app-stat-graphics',
  templateUrl: './stat-graphics.component.html',
  styleUrls: ['./stat-graphics.component.scss']
})
export class StatGraphicsComponent implements OnInit {
  commentStats: Chart = new Chart('Комментарий',
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
    ], ['месяц', 'количество работ'], {});
  analysisStats: Chart = new Chart('Анализ',
    'LineChart', [
      ["Январь", 7],
      ["Февраль", 8],
      ["Март", 9],
      ["Апрель", 14],
      ["Май", 9],
      ["Июнь", 21],
      ["Июль", 25],
      ["Август", 13],
      ["Сентябрь", 20],
      ["Октябрь", 18],
      ["Ноябрь", 9],
      ["Декабрь", 10],
    ], ['месяц', 'количество работ'], {});
  translationStats: Chart = new Chart('Перевод',
    'LineChart', [
      ["Январь", 10],
      ["Февраль", 8],
      ["Март", 9],
      ["Апрель", 16],
      ["Май", 9],
      ["Июнь", 21],
      ["Июль", 25],
      ["Август", 40],
      ["Сентябрь", 20],
      ["Октябрь", 21],
      ["Ноябрь", 9],
      ["Декабрь", 3],
    ], ['месяц', 'количество работ'], {});
  retellingStats: Chart = new Chart('Краткий пересказ',
    'LineChart', [
      ["Январь", 2],
      ["Февраль", 3],
      ["Март", 4],
      ["Апрель", 5],
      ["Май", 6],
      ["Июнь", 7],
      ["Июль", 9],
      ["Август", 10],
      ["Сентябрь", 11],
      ["Октябрь", 12],
      ["Ноябрь", 13],
      ["Декабрь", 14],
    ], ['месяц', 'количество работ'], {});

  constructor(private statisticsService: StatisticsService) {
  }

  ngOnInit() {
    let encountDays = 10;

    let nowDate = new Date();
    let snapshotPeriod = 1000 * 60 * 60;
    let snapshotsAmount = 24 * encountDays + nowDate.getHours();
    let dateFrom = nowDate.getTime() - 1000 * 60 * 60 * 24 * encountDays;

    let types: WorkType[] = [WorkType.ANALYSIS, WorkType.COMMENT, WorkType.RETELLING, WorkType.TRANSLATION];
    this.statisticsService.getWorkTypesPopularityStatistics(types, dateFrom, snapshotPeriod, snapshotsAmount)
      .subscribe(result => {
        let statistics = result.statistics;

        console.log(statistics);

        let typeStatistics = statistics[WorkType.ANALYSIS];
        this.analysisStats.data = this.extractData(typeStatistics);

        typeStatistics = statistics[WorkType.COMMENT];
        this.commentStats.data = this.extractData(typeStatistics);

        typeStatistics = statistics[WorkType.RETELLING];
        this.retellingStats.data = this.extractData(typeStatistics);

        typeStatistics = statistics[WorkType.TRANSLATION];
        this.translationStats.data = this.extractData(typeStatistics);
      })
  }

  private extractData(statistics: WorkTypePopularity[]) {
    return _.map(statistics, statistic => [
      ((snapshotDate) => {
        let date = new Date(snapshotDate);
        return `${date.getDate() + 1}/${date.getMonth() + 1} ${date.getHours()}:00`
      })(statistic.snapshotDate),
      statistic.worksWritten
    ]);
  }

}
