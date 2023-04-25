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
  date:any; 
  cDate = new Date(); 
  

  constructor(private router: Router, public LocalStorage: LocalStorageService) {}
  ngOnInit(){
    this.checker(this.checkName);  
  }
  ionViewWillEnter(){
    this.checkName = localStorage.getItem('username')!;
    this.checker(this.checkName); 
  }
  add(){
     
    if(this.date == undefined){
      
      this.date = this.cDate;
    }
    console.log(this.date);
    let newId = Number(); 
    var newReview = {
    id: newId,
    date: new Date(String(this.date)).toDateString(), 
    name:this.checkName,
    rating: this.rating, 
    description: this.description,
    restaurant: this.restaurant
  }
    if(this.checkName != null) {
      if(newReview.rating <= 5 && newReview.rating > 0 && newReview.restaurant != undefined && newReview.description != undefined) {
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
        this.rating = Number();
        this.description = ""; 
      } else {
        alert("Ensure fields have been filled with valid information"); 
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
