import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss'],
  template: '<app-other-message></app-other-message>' +
    ' <app-write-message> </app-write-message>'


})
export class ForumComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
