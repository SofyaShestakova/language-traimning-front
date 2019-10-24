import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  template: '<app-stat-graphics></app-stat-graphics>'
})
export class StatisticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
