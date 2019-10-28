import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {User} from '../shared/interfaces';
import {CurrentUserService} from '../shared/services/currentUser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, public user: CurrentUserService) { }


  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

}
