import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CurrentUserService} from "../shared/services/currentUser.service";
import {Assesment, User, Work} from "../shared/interfaces";
import {AssesmentService} from "../shared/services/assesmentService";
import {WorkService} from "../shared/services/htpp/work.service";
import {WorkContainer} from "../shared/services/workContainer";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  private text: string;


  constructor(
    private http: HttpClient,
    private user: CurrentUserService,
    private assesment: AssesmentService,
    private workService: WorkService,
  ) {
  }

  submitAssesment() {

    this.assesment.createAssesment(this.workId, this.mark, this.comment).subscribe(res => {

      this.status = res.status;
      if (this.status == 200) {
        this.isSuccess = true;
      }
    });
  }

  ngOnInit() {
    let login = localStorage.getItem('login');
    console.log("СТРОКА ПЕРЕД ТЕМ КАК ЗАСУНУТЬ ВОРКАЙДИ");
    let workId = parseInt(localStorage.getItem('workId'));
    console.log("ЗАШЛА В ИНИТИ МЕТОД ПИПЕЦ"+workId);
    this.workService.getWork(login, workId).subscribe(
      (res) => {
        console.log("УРААААА МЫ ЗАШЛИ В САБСКРАЙБ");
        this.text = res.body.text;
        console.log("ЭТО НЕ ХУЙ СОБАКИ А ТЕКСТ"+this.text);
      });
      console.log("НУ И ВОТ ЧР ВЫШЛО"+this.text);

  }

}
