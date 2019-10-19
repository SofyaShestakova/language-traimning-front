import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watching-work',
  templateUrl: './watching-work.component.html',
  styleUrls: ['./watching-work.component.scss'],
  template:`<h3>Просмотр чужих работ</h3>
  <app-description-work></app-description-work>
  <app-other-works></app-other-works>`

})
export class WatchingWorkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
