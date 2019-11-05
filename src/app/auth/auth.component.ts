import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthService} from "../shared/services/http/auth.service";
import {UserService} from "../shared/services/userService";
import {AuthCredentials} from "../model/request/AuthCredentials";

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
    // private currentUser: CurrentUserService,
    private authService: AuthService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required)
    })
  }

  submit() {
    const credentials = new AuthCredentials(this.form.value.login, this.form.value.password);

    this.auth.login(credentials).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/main']);
    });
  }
}
