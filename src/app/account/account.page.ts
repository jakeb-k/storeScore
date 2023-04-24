import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  isName = Boolean(); 
  username = String("")
  user1 = new User("ReviewLeaver", "password", 4.5, 3)
  
  nReviews = JSON.parse(sessionStorage.getItem("reviews")!); 
  
  
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit(){
    this.username = this.route.snapshot.paramMap.get('username')!;
    this.checker(localStorage.getItem('username')!); 

  }
  ionViewWillEnter(){
    this.username = localStorage.getItem("username")!;
    this.checker(this.username); 
    this.nReviews = JSON.parse(sessionStorage.getItem("reviews")!); 
    if(this.isName == false){
      location.reload(); 
    }
  }
  checker(checkName:String) {
    if(checkName != "" && checkName != null){
      this.isName = true;
    }else {
      this.isName = false; 
    }
  }
  tester(){
    this.nReviews = JSON.parse(sessionStorage.getItem("reviews")!); 
    console.log(this.nReviews); 
  }
   logout(){
    this.router.navigateByUrl('/login');
    this.isName = false; 
    localStorage.removeItem("username"); 
    localStorage.setItem('isName', 'false')
  }
  navToLog(){
    this.router.navigateByUrl('/login');
  }

}
