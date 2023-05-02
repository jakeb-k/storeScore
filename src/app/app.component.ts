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
    date: new Date("3/1/23").toDateString(),
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
    name: "PizzaGuy23",
    rating: 5,
    restaurant: "Big Poppa Pizza",
    description: "I always love a piece of pizza from here" ,
    date: new Date().toDateString()
  },
  {
    id: 4,
    name: "Jakey",
    rating: 3.9,
    restaurant: "Tandoori Nights",
    description: "great food, but dining area was kind of dirty" ,
    date: new Date("3/9/23").toDateString(),
  },
  {
    id: 5,
    name: "Jakey",
    rating: 4.4,
    restaurant: "Tandoori Nights",
    description: "2nd time here, area was much cleaner and food just as amazing" ,
    date: new Date("3/15/23").toDateString(),
  },
  {
    id: 6,
    name: "Jakey",
    rating: 0.5,
    restaurant: "Burger Bazaar",
    description: "DO NOT GO HERE!, had to wait for over an hour for soggy fries and burgers, confronted manager about and he DID NOT CARE AT ALL, and told me there was nothing he could do because I already ate everything. DO NOT GO HERE!" ,
    date: new Date("3/27/23").toDateString(),
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
