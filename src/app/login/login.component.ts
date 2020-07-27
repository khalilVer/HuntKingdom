import { Component, OnInit } from '@angular/core';
import {UsersService} from '../service/users.service';
import {Users} from '../Model/users';
import {Router} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password: string;
  connected: boolean;
  user = {username: '', password: ''};
  users: Users;
  constructor(private usersService: UsersService, public router: Router) { }

  ngOnInit() {

  }
  login() {
      this.usersService.getUser(this.user.username).subscribe((data: Users) => {
          this.users = data;
          console.log( this.users);
          if (this.users.password === this.user.password) {
              this.connected = true ;
              localStorage.setItem('id', this.users.id.toString());
              localStorage.setItem('username', this.user.username);
              this.usersService.setUserSession(this.user);
              this.gotoList();
          } else {
              this.connected = false;
              window.alert('Please verify your login/password combination');
          }
      });
  }

    gotoList() {
        window.location.href = '/home';
    }
}
