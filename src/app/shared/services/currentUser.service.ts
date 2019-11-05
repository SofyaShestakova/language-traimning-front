import {Injectable, OnInit} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CurrentUserService implements OnInit {

  ngOnInit(): void {
  }

  username = '';
  bio = '';
  screenName = '';

  constructor() {

  }
}
