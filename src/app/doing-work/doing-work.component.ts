import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {BankTextFilter} from "../model/request/WorksFilter";
import {WorkService} from "../shared/services/http/work.service";
import {WorkContainer} from "../shared/services/workContainer";
import {AuthService} from "../shared/services/http/auth.service";
import {BankText} from "../model/BankText";
import {CreateWorkRequest} from "../model/request/CreateWorkRequest";

@Component({
  selector: 'app-doing-work',
  templateUrl: './doing-work.component.html',
  styleUrls: ['./doing-work.component.scss']
})
export class DoingWorkComponent implements OnInit {

  hasLoadedAtLeastOnce: boolean = false;
  isTextAvailable: boolean = false;
  textsIndex: number = 0;
  textsLength: number = 0;
  texts: BankText[] = [];

  form: FormGroup;
  text: BankText;

  isError: boolean = false;
  isSubmit: boolean = false;

  constructor(
    private http: HttpClient,
    private workService: WorkService,
    private workContainer: WorkContainer,
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      text: new FormControl(null, Validators.required),
      workType: new FormControl(3, Validators.required)
    });
  }

  submitWork() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/auth']);
    }

    const createRequest = new CreateWorkRequest(
      this.text.textId, this.form.value.workType,
      this.text.title, this.form.value.text
    );

    this.workService.createWork(createRequest).subscribe(
      (res) => {
        let viewType;
        switch (res.type) {
          case "ANALYSIS" : {
            viewType = "Анализ"
          }
            break;
          case "TRANSLATION" : {
            viewType = "Перевод"
          }
            break;
          case "RETELLING" : {
            viewType = "Краткий пересказ"
          }
            break;
          case "COMMENT" : {
            viewType = "Комментарий"
          }
            break;
        }

        this.workContainer.works.push({
          workId: res.workId,
          title: res.title,
          type: viewType,
          text: res.text
        });

        this.isError = false;
        this.isSubmit = true;
      },
      error => {
        this.isError = true;
        this.isSubmit = false;
      }
    )
  }

  previousText() {
    if (this.textsIndex >= 1) {
      if (this.textsIndex > this.textsLength) {
        this.textsIndex = this.textsLength;
        this.text = this.texts[this.textsLength - 1];
      } else {
        this.text = this.texts[--this.textsIndex];
      }
      this.isTextAvailable = true;
    } else if (this.textsIndex == 0) {
      this.isTextAvailable = false;
    }
  }

  nextText() {
    if (this.textsIndex >= this.textsLength) {
      this.loadMoreTexts();
    } else {
      this.isTextAvailable = true;
      this.text = this.texts[this.textsIndex++];
    }
  }

  private loadMoreTexts() {
    let filter = new BankTextFilter(this.textsIndex);
    this.workService.getTexts(filter)
    .subscribe(
      (response) => {
        if (response != null && response.length > 0) {
          this.textsLength += response.length;
          this.texts = this.texts.concat(response.texts);

          this.hasLoadedAtLeastOnce = true;
          this.isTextAvailable = true;
          this.text = this.texts[this.textsIndex++];
        } else {
          this.isTextAvailable = false;
        }
      },
      err => {

      });
  }

}
