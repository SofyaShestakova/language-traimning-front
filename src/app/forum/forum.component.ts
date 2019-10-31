import {Component, OnInit} from '@angular/core';
import {Theme} from '../shared/interfaces';
import {ThemeService} from '../shared/services/htpp/theme.service';
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

  themes: Theme[] = [];
  showForm = false;
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      themeTitle: new FormControl(null, Validators.required)
    });
    this.themeService.getTheme().subscribe((response) =>{
      response.themes.map(backTheme => {this.themes.push({
        title: backTheme.themeName
      })})
    });
  }

  addTheme() {
    const title = this.form.value.themeTitle;
    this.themeService.createTheme(title).subscribe(()=>{
      this.themes.push({title: title});
    });
    this.form.reset();
    this.showForm = false;
    console.log(this.themes);
  }

}
