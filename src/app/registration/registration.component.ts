import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../shared/interfaces';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(public auth: AuthService, private router: Router) { }

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

    this.auth.register(user).subscribe((res) =>{
      this.form.reset();
      this.router.navigate(["/auth"]);
    })

  }
}
