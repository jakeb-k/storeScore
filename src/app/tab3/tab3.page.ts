import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isName = Boolean(false); 
  checkName = String(); 
  rating = Number();
  description = String(""); 
  restaurant = String(""); 
  

  constructor(private router: Router, public LocalStorage: LocalStorageService) {}
  ngOnInit(){
    this.checker(this.checkName);  
  }
  ionViewWillEnter(){
    this.checkName = localStorage.getItem('username')!;
    this.checker(this.checkName); 
  }
  add(){
    let newId = Number(); 
    var newReview = {
    id: newId,
    date: new Date().toDateString(), 
    name:this.checkName,
    rating: this.rating, 
    description: this.description,
    restaurant: this.restaurant
  }
    if(this.checkName != null) {
      if(newReview.rating <= 5) {
        let currentReviews = JSON.parse(sessionStorage.getItem("reviews")!); 
        let incoming = []; 
        for (let i in currentReviews) {
          incoming.push(currentReviews[i])
          newId = Number(i); 
        }
        newReview.id = newId + 1; 
        incoming.push(newReview)  
        sessionStorage.setItem("reviews", JSON.stringify(incoming));
        alert("New review by "+ this.checkName + " has been uploaded!"); 
      } else {
        alert("Enter a rating between 0 and 5"); 
      }
    } else {
      alert("Please sign in to leave a review"); 
    }
  }
  get(){

  }
  checker(checkName:String) {
    if(checkName != "" && checkName != null){
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
