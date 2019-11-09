import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-page',
  styleUrls: ['./other-page.component.scss'],
  templateUrl: './other-page.component.html'
})
export class OtherPageComponent implements OnInit {

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }

  constructor() {
  }

  ngOnInit() {

  }
}
