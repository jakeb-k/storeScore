import {formatDate} from '@angular/common';

export class Review {
    user: string; 
    rating: number; 
    restaurant: string; 
    description: string; 
    date: string; 

    constructor(user: string, rating: number, restaurant: string, description: string, date: string){
        this.user = user;
        this.rating = rating; 
        this.restaurant = restaurant;
        this.description = description;
        this.date = date;  
    }
    addReview(cReviews: [Review], user:string, rating:number, restaurant: string, description:string, date:string){
        let nReview = new Review(user, rating, restaurant, description, date);
        cReviews.push(nReview); 
        return(cReviews); 
    }
}
