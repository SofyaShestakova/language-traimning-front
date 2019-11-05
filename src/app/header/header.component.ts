import {Component} from '@angular/core';
import {AuthService} from '../shared/services/http/auth.service';
import {UserService} from "../shared/services/userService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  screenName = "";

  constructor(
    private auth: AuthService,
    private router: Router,
    public userService: UserService
  ) {
  }


  ngAfterContentChecked() {
    if (this.auth.isAuthenticated()) {
      this.userService.getUserDetails(this.auth.username)
      .subscribe(res => this.screenName = res.details.screenName)
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth']);
  }

}
