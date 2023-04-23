import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Review } from '../models/review.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  username:String = "";

  user1 = new User("ReviewLeaver", "password", 4.5, 3)
  reviews = [new Review("ReviewLeaver", 3.7, "Big Poppas Pizza","Pretty good pizza, not the best, but pretty good", new Date().toDateString()),
  new Review("ReviewLeaver",4.1, "Burger Bazaar","Some of the best burgers I've ever had, bin was full however",new Date("4/07/23").toDateString()),          
  new Review("ReviewLeaver", 4.8, "Tandoori Nights", "Great little indian place with good food and atmosphere",new Date("3/21/23").toDateString())]
  constructor(private route: ActivatedRoute) {}
  ngOnInit(){
    this.username = this.route.snapshot.paramMap.get('username')!
    console.log(this.username); 
  }

}
