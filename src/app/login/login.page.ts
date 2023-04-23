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

  
  ngOnInit() {
    localStorage.removeItem('username'); 
  }

  login() {
    if(this.username != "") {
    this.router.navigateByUrl('/account/' + this.username);
    localStorage.setItem('username', this.username); 
    localStorage.setItem('isName','true'); 
    } else {
      localStorage.setItem('isName', 'false');
      alert('Please enter a username')
    }
    console.log(localStorage.getItem('isName')); 
  }

}
