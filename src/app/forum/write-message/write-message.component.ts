import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Message, Theme} from '../../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';
import {ThemeService} from '../../shared/services/htpp/theme.service';
import {ForumComponent} from '../forum.component';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss']
})
export class WriteMessageComponent implements OnInit {

  form: FormGroup;
  answerId = 456;
  answer = null;
  answerText: string;
  theme: Theme = null;

  constructor(
    private route: ActivatedRoute,
    private themeService: ThemeService,
    private forum: ForumComponent
  ) {}

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.theme = this.forum.getById(+params.id);
        this.themeService.getMessage(this.theme.id).subscribe((response) => {
          this.theme.messages = [];
          response.messages.map((message) => {
            this.theme.messages.push({
              text: message.text,
              date: new Date(message.createDate)
            })
          })
        });
    });

    this.form = new FormGroup({
      messageText: new FormControl(null, Validators.required),
      answerText: new FormControl(null, Validators.required)
    });
  }

  submitMessage() {
    const message: Message = {
      text: this.form.value.messageText,
      date: new Date(),
      answers: []
    };
    this.themeService.createMessage(message, this.theme.id).subscribe(()=>{
      this.theme.messages.push(message);
    });
    this.form.reset();
  }

  showAnswerField(id: number) {
    this.answer = id;
  }

  submitAnswer(messageId: number) {
    this.theme.messages.find(message => message.id == messageId).answers.push({
      id: this.answerId,
      text: this.form.value.answerText,
      date: new Date()
    });
    this.answerId++;
    this.form.reset();
  }
}
