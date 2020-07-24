import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;
  constructor(public router: Router) { }

  ngOnInit() {
  this.username = localStorage.getItem('username');
  }

  logOutMehtod() {
    localStorage.clear();
    this.ngOnInit();
    this.router.navigate(['/home']);

  }

}
