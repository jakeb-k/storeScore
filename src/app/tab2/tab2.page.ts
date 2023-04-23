import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { Review } from '../models/review.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  user1 = new User("ReviewLeaver", "password", 4.5, 3)
  reviews = [new Review("ReviewLeaver", 4.8, "Tandoori Nights", "Great little indian place with good food and atmosphere",new Date("3/21/23").toDateString()),
            new Review("ReviewLeaver",4.1, "Burger Bazaar","Some of the best burgers I've ever had, bin was full however",new Date("4/07/23").toDateString()),
            new Review("ReviewLeaver", 3.7, "Big Poppas Pizza","Pretty good pizza, not the best, but pretty good", new Date().toDateString())]
  constructor() {}

}
