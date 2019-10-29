import {Component, OnInit} from '@angular/core';
import {Theme} from '../shared/interfaces';
import {ThemeService} from '../shared/services/theme.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
    public route: ActivatedRoute
  ) {
  }

  themes: Theme[] = this.themeService.themes;
  showForm = false;
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      themeTitle: new FormControl(null, Validators.required)
    });
  }

  addTheme() {
    this.themes.push( {
      id: Math.round(Math.random()*100000000),
      title: this.form.value.themeTitle,
      messages : []
    },);
    this.form.reset();
    this.showForm = false;
  }

}
