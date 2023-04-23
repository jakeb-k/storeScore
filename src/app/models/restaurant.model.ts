export class Restaurant {
    name: string; 
    rating: number; 
    location:string; 
    description:string;

    constructor(name: string, rating: number, location: string, description:string) {
        this.name = name;
        this.rating = rating; 
        this.location = location; 
        this.description = description; 
    }

}
