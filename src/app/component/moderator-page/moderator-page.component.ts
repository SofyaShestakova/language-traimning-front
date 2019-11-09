import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-moderator-page',
  templateUrl: './moderator-page.component.html',
  styleUrls: ['./moderator-page.component.scss']
})
export class ModeratorPageComponent implements OnInit {
  isClick: boolean = false;

  constructor() {
  }

  submitNewText() {
    this.isClick = true;
  }

  ngOnInit() {
  }

}
