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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.restName = this.route.snapshot.paramMap.get('restName')!;
    this.uName = this.restName; 
  }
  ionViewWillEnter(){
    this.nReviews = JSON.parse(sessionStorage.getItem("reviews")!); 
    this.sorter(); 
  }
  sorter(){
    for(let i in this.nReviews){
      let testObj = this.nReviews[i];
      if(testObj['restaurant'] == this.restName) {
        this.restReviews.push(testObj) 
      }
    }
    console.log(this.restReviews[0]); 
  }
}
