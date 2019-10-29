import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doing-work',
  styleUrls: ['./doing-work.component.scss'],
  template:`<h3>Написание работы</h3>
  <app-description></app-description>
  <app-send-work></app-send-work>`
})
export class DoingWorkComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
