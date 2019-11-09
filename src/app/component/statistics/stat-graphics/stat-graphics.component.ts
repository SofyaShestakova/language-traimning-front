import {Component, OnInit} from '@angular/core';

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
  number_works: Chart = new Chart('Комментарий',
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
  analyze: Chart = new Chart('Анализ',
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
  translate: Chart = new Chart('Перевод',
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
  short_desc: Chart = new Chart('Краткий пересказ',
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

  constructor() {
  }

  ngOnInit() {
  }

}
