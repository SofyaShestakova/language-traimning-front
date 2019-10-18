import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";

@Component({
  selector: 'app-send-work',
  templateUrl: './send-work.component.html',
  styleUrls: ['./send-work.component.scss']
})
export class SendWorkComponent implements OnInit {
  constructor(svc:HttpService) {
    svc.sendForm("this form was sended");
  }

  ngOnInit() {
  }

}
