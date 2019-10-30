import { Component, OnInit } from '@angular/core';
import {WorkContainer} from '../shared/services/workContainer';

@Component({
  selector: 'app-watching-work',
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
