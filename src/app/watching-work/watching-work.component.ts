import {Component, OnInit} from '@angular/core';
import {TextService} from "../shared/services/http/text.service";
import {WorkFilter} from "../model/request/WorkFilter";
import {Work} from "../shared/interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-watching-work',
  templateUrl: './watching-work.component.html',
  styleUrls: ['./watching-work.component.scss']

})
export class WatchingWorkComponent implements OnInit {

  worksAmount: number;
  works: Work[];

  constructor(
    private router: Router,
    private workService: TextService
  ) {
  }

  ngOnInit(): void {
    this.workService.getWorks(new WorkFilter()).subscribe(res => {
        this.worksAmount = res.length;
        this.works = res.works;
      }
    )
  }

  onWorkClick(workId: number) {
    localStorage.setItem('workId', workId.toString());
    this.router.navigate(['/assignment']);
  }

}
