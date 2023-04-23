export class User {
    name: string; 
    password:string; 
    avgRating: number; 
    reviewCount: number;
    constructor(name:string, password: string, avgRating: number, reviewCount: number) {
        this.name = name;
        this.password = password;
        this.avgRating = avgRating; 
        this.reviewCount = reviewCount; 
    }
}
