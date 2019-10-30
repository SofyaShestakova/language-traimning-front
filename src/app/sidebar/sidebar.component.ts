import {Component, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/htpp/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private auth: AuthService, private router: Router){
  }


  isAuth() {
    if(this.auth.isAuthenticated()){
      this.router.navigate(["/personal-area"]);
    }else {
      this.router.navigate(["/auth"]);
    }
  }
}
