import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isName = Boolean(false); 
  checkName = localStorage.getItem('username')!;


restaurants = [new Restaurant("Big Poppa Pizza", 4.5, "Tugun", "Big Poppas Pizza is a fun and casual pizza place that's perfect for a night out with friends or family."),
new Restaurant("Tandoori Nights", 4.8, "Palm Beach", "Tandoori Nights is a cozy restuarant that's perfect for a romantic dinner or a night out with friends."), 
new Restaurant("Burger Bazaar", 4.6, "Elanora", "Burger Bazaar is a burger lover's paradise, with a menu that will make your mouth water!") ]
  constructor(private router: Router) {}
 
  ngOnInit(){
    this.checker(this.checkName); 
    console.log(this.checkName); 
  }
  
  checker(checkName:String) {
    if(checkName != ""){
      this.isName = true;
    }else {
      this.isName = false; 
    }
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
