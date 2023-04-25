import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  isName = Boolean(false); 
  checkName = String(); 
  rating = Number();
  description = String(""); 
  restaurant = String(""); 
  currentReviews = []; 
  id = Number(); 
  editObj: any; 
  pR = Number(); 
  pD = String();

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(){
    this.checker(this.checkName);  
  }
  ionViewWillEnter(){
    this.id = Number(this.route.snapshot.paramMap.get('id')!);
    this.checkName = localStorage.getItem('username')!;
    this.checker(this.checkName); 
    this.currentReviews = JSON.parse(sessionStorage.getItem("reviews")!);
    this.get(); 
  }

  add(){
    this.get(); 
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
        let incoming:  any[] =  []; 
        for (let i in this.currentReviews) {
          incoming.push(this.currentReviews[i])
        }
        newReview.id = this.id; 
        
        incoming.splice(this.id, 1, newReview); 
        console.log(incoming);   

        sessionStorage.setItem("reviews", JSON.stringify(incoming));
        alert("Review by "+ this.checkName + " has been edited!"); 
        this.navToAcc(this.checkName); 
      } else {
        alert("Enter a rating between 0 and 5"); 
      }
    } else {
      alert("Please sign in to leave a review"); 
    }
  }
  get(){
    for(let i in this.currentReviews){
      let holdObj = this.currentReviews[i]
      if(holdObj['id']== this.id) {
        this.editObj = holdObj;  
      }
    }
    this.restaurant = this.editObj['restaurant']; 
    this.pD = this.editObj['description'];
    this.pR = Number(this.editObj['rating']); 

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
  saveAlert(){
    alert('Changes will not be saved'); 
  }
  navToAcc(acc: String){
    this.router.navigateByUrl('/account/'+ acc);
  }

}
