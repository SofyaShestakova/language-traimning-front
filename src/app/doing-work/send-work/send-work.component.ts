import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Text} from '../../shared/interfaces';
import {CurrentUserService} from '../../shared/services/currentUser.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-send-work',
  templateUrl: './send-work.component.html',
  styleUrls: ['./send-work.component.scss']
})
export class SendWorkComponent implements OnInit {

  form :FormGroup;

  isSubmit = false;
  constructor(private user: CurrentUserService,
              private http: HttpClient) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      text: new FormControl(null, Validators.required)
    })
  }

  submit() {
    const text: Text = {
      title: this.form.value.title,
      text: this.form.value.text
    };

    const user = this.user.username;

    const headers = new HttpHeaders({
      "username": user,
      "Authorization": "Bearer " + localStorage.getItem("spring-token"),
    });

    const options = {headers: headers};

    this.http.post("http://localhost:8180/texts", text, options).subscribe((res)=> {
      this.isSubmit = true;
    })

  }
}
