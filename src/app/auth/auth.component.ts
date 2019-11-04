import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CurrentUserService} from '../shared/services/currentUser.service';
import {AuthService} from "../shared/services/htpp/auth.service";
import {UserService} from "../shared/services/userService";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  form: FormGroup;

  constructor(
    private http: HttpClient,
    public auth: AuthService,
    private router: Router,
    private currentUser: CurrentUserService,
    private patchDetailsService: UserService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required)
    })

  }

  submit() {
    const user: User = {
      username: this.form.value.login,
      password: this.form.value.password
    };

    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.currentUser.username = user.username;
      this.router.navigate(['/main']);
    });

    this.patchDetailsService.patchUserDetails(user).subscribe(res => {
      this.currentUser.bio = res.details.bio;
      this.currentUser.screenName = res.details.screenName;
    })
  }
}
