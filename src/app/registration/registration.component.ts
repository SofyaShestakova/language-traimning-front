import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from "../shared/services/userService";
import {AuthService} from "../shared/services/http/auth.service";
import {AuthCredentials} from "../model/request/AuthCredentials";

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
    const credentials = new AuthCredentials(this.form.value.login, this.form.value.password);
    this.auth.register(credentials).subscribe((res) => {
      this.form.reset();
      this.router.navigate(["/auth"]);
    });
  }
}
