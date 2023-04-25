import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  restName = String(""); 
  uName = String("");
  restReviews = []; 
  nReviews = []; 
  avgRating = Number(); 
  reviewCount = Number(); 
  total = Number(); 
  restaurants = JSON.parse(sessionStorage.getItem('restaurants')!);

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.restName = this.route.snapshot.paramMap.get('restName')!;
    this.uName = this.restName; 
  }
  ionViewWillEnter(){
    this.nReviews = JSON.parse(sessionStorage.getItem("reviews")!); 
    this.sorter(); 
    this.updateRating(); 
  }
  sorter(){
    this.restReviews =[];
    this.total = 0; 
    for(let i in this.nReviews){
      let testObj = this.nReviews[i];
      if(testObj['restaurant'] == this.restName) {
        this.restReviews.push(testObj);
        this.total += Number(testObj['rating']); 
      }
    }
    this.reviewCount = this.restReviews.length; 
    this.avgRating = this.total / this.reviewCount;
    console.log(this.restReviews[0]); 
  }
  
  updateRating(){
    for(let i in this.restaurants){
      let testObj = this.restaurants[i]
      if(testObj['name'] == this.restName) {
        this.restaurants[i]['rating'] = this.avgRating; 
      }
    }
    sessionStorage.setItem('restaurants', JSON.stringify(this.restaurants));
  }
 
}
