import {Component, OnInit} from '@angular/core';
import {StatisticsService} from "../../../shared/services/http/statistics.service";

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


  constructor() {
  }

  ngOnInit() {
  }

}
