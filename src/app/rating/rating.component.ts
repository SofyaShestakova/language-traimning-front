import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  template: '<h3>Рейтинг</h3><app-rating-works></app-rating-works>'
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}