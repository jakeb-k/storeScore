import { Component } from '@angular/core';
import { Restaurant } from './models/restaurant.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  reviews = [{
    id: 0,
    name: "Jakey",
    rating: 4,
    restaurant: "Big Poppa Pizza",
    description: "amazing garlic bread, and decent pizza" ,
    date: new Date("3/7/23").toDateString(),
  },{
    id: 1,
    name: "ReviewLeaver",
    rating: 4.3,
    restaurant: "Tandoori Nights",
    description: "amazing garlic naan bread, and decent butter chicken" ,
    date: new Date("3/21/23").toDateString(),
  },{
    id: 2,
    name: "Tester",
    rating: 4.6,
    restaurant: "Burger Bazaar",
    description: "amazing onion rings, and decent burgers" ,
    date: new Date("4/21/23").toDateString()
  },
  {
    id: 3,
    name: "PizzaDat455",
    rating: 5,
    restaurant: "Big Poppa Pizza",
    description: "I always love a piece of dat pizza" ,
    date: new Date().toDateString()
  }];

  restaurants = [new Restaurant("Big Poppa Pizza", 4.5, "Tugun", "Big Poppas Pizza is a fun and casual pizza place that's perfect for a night out with friends or family."),
new Restaurant("Tandoori Nights", 4.8, "Palm Beach", "Tandoori Nights is a cozy restuarant that's perfect for a romantic dinner or a night out with friends."), 
new Restaurant("Burger Bazaar", 4.6, "Elanora", "Burger Bazaar is a burger lover's paradise, with a menu that will make your mouth water!") ]
  
   

  constructor() {}

  ngOnInit(){
    sessionStorage.setItem('restaurants', JSON.stringify(this.restaurants));
    sessionStorage.setItem("reviews", JSON.stringify(this.reviews)); 
  }
}
