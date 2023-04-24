import { Component } from '@angular/core';

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

  constructor() {}

  ngOnInit(){
    sessionStorage.setItem("reviews", JSON.stringify(this.reviews)); 
  }
}
