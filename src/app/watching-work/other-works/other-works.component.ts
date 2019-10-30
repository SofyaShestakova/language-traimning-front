import { Component, OnInit } from '@angular/core';
import {WorkContainer} from '../../shared/services/workContainer';

@Component({
  selector: 'app-other-works',
  templateUrl: './other-works.component.html',
  styleUrls: ['./other-works.component.scss']
})
export class OtherWorksComponent implements OnInit {

  constructor(private works: WorkContainer) { }

  ngOnInit() {

  }

}
