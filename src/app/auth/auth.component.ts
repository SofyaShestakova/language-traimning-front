import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {CurrentUserService} from '../shared/services/currentUser.service';

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
    private currentUser: CurrentUserService
  ) { }

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

    this.auth.login(user).subscribe(()=>{
      this.form.reset();
      this.currentUser.username = user.username;
      this.router.navigate(['/main']);

    })


    /*
    Регистрация
    this.http.post('http://localhost:8082/auth', user).subscribe(res => {
      console.log(res);
    })*/

  }
}
