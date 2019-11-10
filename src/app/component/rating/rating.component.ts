import {Component, OnInit} from '@angular/core';
import {PageWork} from "../../shared/interfaces";
import {Router} from "@angular/router";
import {TextWorkService} from "../../shared/services/http/text-work.service";
import {UserServiceService} from "../../shared/services/http/userService.service";
import {WorkSort, WorkFilter} from "../../model/request/WorkFilter";

@Component({
  selector: 'app-rating',
  styleUrls: ['./rating.component.scss'],
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  works: PageWork[] = [];

  constructor(
    private router: Router,
    private workService: TextWorkService,
    private userService: UserServiceService
  ) {
  }

  ngOnInit() {
    let filter = new WorkFilter(0, 20);
    filter.sort = WorkSort.RATING_DESCENDING;

    this.workService.getWorks(filter).subscribe(worksResponse => {
      worksResponse.works.forEach(work => {
        this.userService.getUserDetailsById(work.authorId).subscribe(detailsResponse => {
          let pageWork: PageWork = {work: work, user: detailsResponse.user, details: detailsResponse.details};
          this.works.push(pageWork);
        })
      });
    })
  }

}
