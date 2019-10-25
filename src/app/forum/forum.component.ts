import {Component, OnInit} from '@angular/core';
import {Theme} from '../shared/interfaces';
import {ThemeService} from '../shared/services/theme.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute
  ) {
  }

  themes: Theme[] = this.themeService.themes;

  ngOnInit() {
  }

}
