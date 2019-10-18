import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss'],
  template:`<h3>Личный кабинет</h3>
  <app-photo></app-photo>
  <app-personal-info></app-personal-info>
  <app-graphics></app-graphics>`
})
export class PersonalAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
