import {Injectable} from '@angular/core';
import {AuthService} from './htpp/auth.service';

@Injectable({providedIn: 'root'})
export class CurrentUserService {

  username = '';
  bio = '';
  screenName = '';

  constructor(){

  }
}
