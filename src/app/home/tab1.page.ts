import { Component } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
restaurants = [new Restaurant("Big Poppa Pizza", 4.5, "Tugun", "Big Poppas Pizza is a fun and casual pizza place that's perfect for a night out with friends or family."),
new Restaurant("Tandoori Nights", 4.8, "Palm Beach", "Tandoori Nights is a cozy restuarant that's perfect for a romantic dinner or a night out with friends."), 
new Restaurant("Burger Bazaar", 4.6, "Elanora", "Burger Bazaar is a burger lover's paradise, with a menu that will make your mouth water!") ]
  constructor() {}

}
