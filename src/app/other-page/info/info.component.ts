import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Theme} from "../../shared/interfaces";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }

  constructor() {
  }

  ngOnInit() {

  }
}
