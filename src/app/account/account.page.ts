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
  isPresent = Boolean(); 
  username = String("")
  user1 = new User("ReviewLeaver", "password", 4.5, 3)
  restReviews = [];
  nReviews = [];  
  avgRating = Number(); 
  reviewCount = Number(); 
  total = Number(); 
  
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
    this.sorter(); 
  }
  sorter(){
    this.restReviews = []; 
    this.total = 0; 
    for(let i in this.nReviews){
      let testObj = this.nReviews[i];
      if(testObj['name'] == this.username) {
        this.restReviews.push(testObj); 
        this.total += Number(testObj['rating']);
        console.log(Number(testObj['rating']));  
      }
    }
    this.reviewCount = this.restReviews.length; 
    this.avgRating = this.total / this.reviewCount; 
    if (this.restReviews[0] != undefined) {
      this.isPresent = true; 
    } else {
      this.isPresent = false; 
    }
    console.log(this.restReviews[0]); 
  }
  checker(checkName:String) {
    if(checkName != "" && checkName != null){
      this.isName = true;
    }else {
      this.isName = false; 
    }
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
  navToEdit(id: number){
    this.router.navigateByUrl('/edit/'+ id);
  }

}
