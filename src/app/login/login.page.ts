import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = String(""); 

  constructor(private router: Router) {}

  login() {
    this.router.navigateByUrl('/account/' + this.username);
  }

  ngOnInit() {
  }

}
