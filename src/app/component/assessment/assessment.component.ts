import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AssessmentService} from "../../shared/services/assessment.service";
import {TextService} from "../../shared/services/http/text.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-assignment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  private form: FormGroup;

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

  ngOnInit() {
    this.form = new FormGroup({
      mark: new FormControl(null, [Validators.required]),
      comment: new FormControl(null, Validators.required)
    });

    this.workId = parseInt(localStorage.getItem('workId'));
    this.workService.getWork(this.workId).subscribe((res) => {
      this.title = res.title;
      this.text = res.text;
    });
  }

  submitAssessment() {
    this.assessment.createAssessment(this.workId, this.form.value.mark, this.form.value.comment).subscribe(res => {
      this.form.reset();

      this.status = res.status;
      if (this.status == 200) {
        this.isSuccess = true;
      }
    });
  }

}
