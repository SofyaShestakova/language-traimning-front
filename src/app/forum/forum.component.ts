import {Component, OnInit} from '@angular/core';
import {Theme} from '../shared/interfaces';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ForumService} from "../shared/services/http/forum.service";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(
    private themeService: ForumService,
    public route: ActivatedRoute
  ) {
  }

  themes: Theme[] = [];
  showForm = false;
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      themeTitle: new FormControl(null, Validators.required)
    });
    this.themeService.getTheme().subscribe((response) =>{
      response.themes.map(backTheme => {this.themes.push({
        title: backTheme.themeName,
        id: backTheme.themeId,
        messages: []
      })})
    });
  }

  addTheme() {
    const title = this.form.value.themeTitle;
    this.themeService.createTheme(title).subscribe((res)=>{
      this.themes.push(
        {
          title: title,
          id: res.themeId
        });
    });
    this.form.reset();
    this.showForm = false;
    console.log(this.themes);
  }

  getById(id: number): Theme{
    return this.themes.find( theme => theme.id === id);
  }

}
