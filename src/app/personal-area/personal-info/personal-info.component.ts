import {Component, Injectable, OnInit} from '@angular/core';
import {CurrentUserService} from "../../shared/services/currentUser.service";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../shared/services/userService";
import {User} from "../../shared/interfaces";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  private bio: string;
  private screenName: string;

  constructor(
    private user: CurrentUserService,
    private details: UserService,
    private http: HttpClient
  ) {
  }

  submitInfo() {
    this.user.screenName = this.screenName;
    this.user.bio = this.bio;

    const newUser: User = {
      username: this.user.username,
      password: "",
      bio: this.user.bio,
      screenName: this.user.screenName
    };

    this.details.patchUserDetails(newUser).subscribe(res => {

    });
  }


  ngOnInit() {
  }

}
