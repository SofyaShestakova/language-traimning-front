import {Component, OnInit} from '@angular/core';
import {WorkContainer} from '../../shared/services/workContainer';
import {HttpClient} from "@angular/common/http";
import {WorkService} from "../../shared/services/http/work.service";

@Component({
  selector: 'app-other-works',
  templateUrl: './other-works.component.html',
  styleUrls: ['./other-works.component.scss']
})
export class OtherWorksComponent implements OnInit{

  constructor(private works: WorkContainer, private http: HttpClient, private workService: WorkService) {
  }

  setWorkId(workId:number) {
    localStorage.setItem('workId', workId.toString());
  }

  getWorkId() {
    localStorage.getItem('workId');
  }

  ngOnInit() {
  }

}
