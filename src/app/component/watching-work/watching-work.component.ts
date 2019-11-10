import {Component, OnInit} from '@angular/core';
import {TextWorkService} from "../../shared/services/http/text-work.service";
import {WorkFilter} from "../../model/request/WorkFilter";
import {PageWork, User, UserDetails, Work} from "../../shared/interfaces";
import {Router} from "@angular/router";
import {UserServiceService} from "../../shared/services/http/userService.service";

@Component({
  selector: 'app-watching-work',
  templateUrl: './watching-work.component.html',
  styleUrls: ['./watching-work.component.scss']

})
export class WatchingWorkComponent implements OnInit {

  worksAmount: number;
  works: PageWork[];

  constructor(
    private router: Router,
    private workService: TextWorkService,
    private userService: UserServiceService,
  ) {
  }

  ngOnInit(): void {
    this.workService.getWorks(new WorkFilter()).subscribe(res => {
        this.worksAmount = res.length;
        this.works = [];
        res.works.forEach(work  => {
          this.userService.getUserDetailsById(work.authorId).subscribe(user => {
            let pageWork: PageWork = {work: work, user: user.user, details: user.details};
            this.works.push(pageWork);
          });
        })
      }
    )
  }

  onWorkClick(workId: number) {
    localStorage.setItem('workId', workId.toString());
    this.router.navigate(['/assignment']);
  }

}
