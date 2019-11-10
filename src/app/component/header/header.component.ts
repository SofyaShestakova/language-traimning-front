import {Component} from '@angular/core';
import {AuthService} from '../../shared/services/http/auth.service';
import {UserServiceService} from "../../shared/services/http/userService.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  cooldown = 10_000;

  lastUpdated = -1;
  screenName = "";

  constructor(
    private auth: AuthService,
    private router: Router,
    public userService: UserServiceService
  ) {
  }


  ngAfterContentChecked() {
    const newTime = new Date().getTime();
    if (this.auth.isAuthenticated() && newTime - this.lastUpdated >= this.cooldown) {
      this.lastUpdated = newTime;
      this.userService.getUserDetails(this.auth.username)
        .subscribe(res => this.screenName = res.details.screenName)
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/auth']);
  }

}
