import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {UsersService} from '../service/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;
  connected: boolean;
  constructor(public router: Router, private userService: UsersService) {
  }

  ngOnInit() {
  this.username = localStorage.getItem('username');
  if (localStorage.length === 0) {
    this.connected = false;
  } else {
    this.connected = true;
  }
  }


  logOutMehtod() {
    localStorage.clear();
    this.ngOnInit();
    this.router.navigate(['/home']);

  }

}
