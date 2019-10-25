import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other-page',
  templateUrl: './other-page.component.html',
  styleUrls: ['./other-page.component.scss'],
  template: '<app-photo-other></app-photo-other><app-info></app-info>'
})
export class OtherPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
