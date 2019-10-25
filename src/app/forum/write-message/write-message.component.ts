import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Answer, Message} from '../../shared/interfaces';

@Component({
  selector: 'app-write-message',
  templateUrl: './write-message.component.html',
  styleUrls: ['./write-message.component.scss']
})
export class WriteMessageComponent implements OnInit {

  form: FormGroup;
  messages: Message[] = [];
  messageId = 0;
  answerId = 0;

  answer = null;
  answerText: string;

  constructor() {

  }

  ngOnInit() {
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
    this.messages.push(message);
    this.messageId++;
    this.form.reset();
  }

  showAnswerField(id: number) {
    this.answer = id;
  }

  submitAnswer(messageId: number) {
    this.messages.find(message => message.id == messageId).answers.push({
      id: this.answerId,
      text: this.form.value.answerText,
      date: new Date()
    });
    this.answerId++;
    this.form.reset();
  }
}
