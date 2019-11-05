import {Component, OnInit} from '@angular/core';
import {UserService} from "../../shared/services/http/userService";
import {AuthService} from "../../shared/services/http/auth.service";
import {Router} from "@angular/router";
import {EditUserRequest} from "../../model/request/EditUserRequest";

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  private avatarUrl: string;
  private screenName: string;
  private bio: string;

  private newScreenName: string;
  private newBio: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/auth']);
    }
    this.loadDetails();
  }

  loadDetails() {
    this.userService.getUserDetails(this.authService.username).subscribe(
      res => {
        const user = res.user;
        const details = res.details;

        this.avatarUrl = user.avatarUrl;
        this.screenName = details.screenName;
        this.bio = details.bio;
      }
    )
  }

  submitInfo() {
    const request = new EditUserRequest(this.newScreenName, this.newBio);
    this.userService.editUser(request).subscribe( () => {
      this.loadDetails();
    });
  }

}
