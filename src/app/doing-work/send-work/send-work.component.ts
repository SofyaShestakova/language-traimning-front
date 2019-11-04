import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Text, Work} from '../../shared/interfaces';
import {CurrentUserService} from '../../shared/services/currentUser.service';
import {HttpClient} from '@angular/common/http';

import {Router} from '@angular/router';
import {WorkContainer} from '../../shared/services/workContainer';
import {WorkService} from "../../shared/services/htpp/work.service";
import {AuthService} from "../../shared/services/htpp/auth.service";

@Component({
  selector: 'app-send-work',
  templateUrl: './send-work.component.html',
  styleUrls: ['./send-work.component.scss']
})
export class SendWorkComponent implements OnInit {

  form: FormGroup;
  text: Text;

  isSubmit = false;
  isGetText = false;

  constructor(private user: CurrentUserService,
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
    const work: Work = {
      text: this.form.value.text,
      type: this.form.value.workType,
      title: this.text.title,
      textId: this.text.textId
    };

    console.log(work);

    if (this.auth.isAuthenticated()) {
      this.workService.postWork(this.user.username, work).subscribe((res) => {
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

        this.isSubmit = true;
      });
    } else {
      this.router.navigate(['/auth']);
    }


  }

  renderText() {
    this.workService.getText().subscribe((response) => {
      this.isGetText = true;
      this.text = {
        textId: response.textId,
        title: response.title,
        text: response.text
      };
    });


  }

}
