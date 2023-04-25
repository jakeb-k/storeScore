import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  username = String();  
  isName = Boolean(false); 
  checkName = localStorage.getItem('username')!;
  restReviews = []; 
  nReviews = [];
  restaurants = JSON.parse(sessionStorage.getItem('restaurants')!);
  constructor(private router: Router) {}
 
  ngOnInit(){
    this.restaurants = JSON.parse(sessionStorage.getItem('restaurants')!);
    this.checker(this.checkName); 
    console.log(this.checkName); 
  }
  ionViewWillEnter(){
     
    this.username = localStorage.getItem("username")!;
    this.checker(this.username);  
    this.nReviews = JSON.parse(sessionStorage.getItem("reviews")!); 
    this.restaurants = JSON.parse(sessionStorage.getItem('restaurants')!);
  }

  checker(checkName:String) {
    if(checkName != "" && checkName != null){
      this.isName = true;
    }else {
      this.isName = false; 
    }
  }
  
  restNav(restName: any){
    this.router.navigateByUrl('/restaurant/'+ restName); 
    console.log(restName); 
  }
  logout(){
    this.router.navigateByUrl('/login');
    localStorage.removeItem("username"); 
    localStorage.setItem('isName','false');
    this.isName = false; 
    
  }
  navToLog(){
    this.router.navigateByUrl('/login'); 
  }
}
