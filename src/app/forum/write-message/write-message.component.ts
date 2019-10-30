import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Message, Theme} from '../../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';
import {ThemeService} from '../../shared/services/htpp/theme.service';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss']
})
export class WriteMessageComponent implements OnInit {

  form: FormGroup;
  messageId = 1555;
  answerId = 456;
  answer = null;
  answerText: string;
  theme: Theme;

  constructor(
    private route: ActivatedRoute,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
      this.theme = this.themeService.getById(+params.id);
    });

    this.form = new FormGroup({
      messageText: new FormControl(null, Validators.required),
      answerText: new FormControl(null, Validators.required)
    });
  }

  submitMessage() {
    const message: Message = {
      id: this.messageId,
      text: this.form.value.messageText,
      date: new Date(),
      answers: []
    };
    this.theme.messages.push(message);
    this.messageId++;
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
