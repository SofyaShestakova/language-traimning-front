import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CurrentUserService} from "../shared/services/currentUser.service";
import {Assesment, User} from "../shared/interfaces";
import {AssesmentService} from "../shared/services/assesmentService";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  private workId: number;
  private comment: string;
  private mark: number;

  constructor(
    private http: HttpClient,
    private user: CurrentUserService,
    private assesment: AssesmentService
  ) {
  }
  submitAssesment() {

    this.assesment.createAssesment(this.workId,this.mark,this.comment).subscribe(res => {

    });
  }
  ngOnInit() {
  }

}
