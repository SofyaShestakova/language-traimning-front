import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AssessmentService} from "../shared/services/assessment.service";
import {TextService} from "../shared/services/http/text.service";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
@Injectable({providedIn: 'root'})
export class AssignmentComponent implements OnInit {

  private workId: number;
  private comment: string;
  private mark: number;
  private isSuccess: boolean = false;
  private status: number;

  private title: string;
  private text: string;


  constructor(
    private http: HttpClient,
    private assessment: AssessmentService,
    private workService: TextService,
  ) {
  }

  submitAssessment() {
    this.assessment.createAssessment(this.workId, this.mark, this.comment).subscribe(res => {
      this.status = res.status;
      if (this.status == 200) {
        this.isSuccess = true;
      }
    });
  }

  ngOnInit() {
    this.workId = parseInt(localStorage.getItem('workId'));
    this.workService.getWork(this.workId).subscribe((res) => {
      this.title = res.title;
      this.text = res.text;
    });
  }

}
