import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {AssessmentService} from "../../shared/services/assessment.service";
import {TextService} from "../../shared/services/http/text.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateAssessmentRequest} from "../../model/request/CreateAssessmentRequest";
import {CreateAssessmentResponse} from "../../model/response/CreateAssessmentResponse";

@Component({
  selector: 'app-assignment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  private form: FormGroup;

  private workId: number;
  private workTitle: string;
  private workText: string;

  private comment: string;
  private mark: number;

  private hasSent: boolean = false;
  private sendSuccess: boolean = false;
  private sendMessage: string;


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
      this.workTitle = res.title;
      this.workText = res.text;
    });
  }

  submitAssessment() {
    this.assessment.createAssessment(this.workId, this.form.value.mark, this.form.value.comment).subscribe(res => {
        this.form.reset();
        console.log(res);
        this.sendSuccess = true;
        this.sendMessage = "Оценивание было успешно отправлено!";
        this.hasSent = true;
      },
      error => {
        this.sendSuccess = false;
        switch (error.status) {
          case 409: {
            this.sendMessage = "Вы уже создавали оценивание по этой работе";
            break;
          }
          case 404: {
            this.sendMessage = "Работа не была найдена. Возможно она была удалена";
            break;
          }
          default: {
            this.sendMessage = "При отправке что-то пошло не так. Обратитесь к администратору";
          }
        }
        this.hasSent = true;
      }
    );
  }

}
