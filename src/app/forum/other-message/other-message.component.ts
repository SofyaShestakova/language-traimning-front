import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-other-message',
  templateUrl: './other-message.component.html',
  styleUrls: ['./other-message.component.scss']
})

export class OtherMessageComponent implements OnInit {
   list:number[];
  constructor(list:number[]) {
  this.list = list;
  }

  ngOnInit() {
  }
}


