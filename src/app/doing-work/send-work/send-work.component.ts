import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Text, Work} from '../../shared/interfaces';
import {CurrentUserService} from '../../shared/services/currentUser.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WorkService} from '../../shared/services/htpp/work.service';
import {TextContainer} from '../../shared/services/textContainer';

@Component({
  selector: 'app-send-work',
  templateUrl: './send-work.component.html',
  styleUrls: ['./send-work.component.scss']
})
export class SendWorkComponent implements OnInit {

  form :FormGroup;
  text: Text;

  isSubmit = false;
  isGetText= false;
  constructor(private user: CurrentUserService,
              private http: HttpClient,
              private workService: WorkService,
              private textContainer: TextContainer
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      text: new FormControl(null, Validators.required),
      workType: new FormControl(null, Validators.required)
    });

  }

  submitWork() {
    const work: Work = {
      text: this.form.value.text,
      workType: this.form.value.workType
    };
    console.log(work);

    this.workService.postWork(this.user.username, work).subscribe( (res) => {
      //text.textId =  res.textID;
      //this.textContainer.texts.push(text);
      this.isSubmit = true;
    });
  }

  renderText(){
    this.workService.getText().subscribe((response)=>{
      this.isGetText = true;
      this.text = {
       title: response.title,
       text: response.text
     };
    });


  }

}
