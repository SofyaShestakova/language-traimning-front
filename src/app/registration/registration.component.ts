import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {Router} from '@angular/router';
import {UserService} from "../shared/services/userService";
import {AuthService} from "../shared/services/htpp/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(public auth: AuthService, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  submit() {
    const user: User = {
      username: this.form.value.login,
      password: this.form.value.password
    };

    this.auth.register(user).subscribe((res) => {
      this.form.reset();
      this.router.navigate(["/auth"]);
    });

    this.userService.patchUserDetails(user).subscribe(res => {
      let details = res.details;
      user.bio = details.bio;
      user.screenName = details.screenName;
    });
  }
}
