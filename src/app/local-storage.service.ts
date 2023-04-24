import { Injectable } from '@angular/core';
import { Review } from './models/review.model';
declare var db: any; 
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public storageName = "Reviewsdb" ; 

  constructor() { }
  //add and update function 
  add(keyname: any, value: any){
    return new Promise(async(resolve, reject)=>{
      if(db != undefined){
        const request = await db.transaction([this.storageName], "readwrite")
        .objectStore(this.storageName).put(value, keyname);

        request.onsuccess = await function(event: any){
          if(event.target.reset){
            console.log("success");
            resolve("success");
          }else {
            console.log("error");
            resolve(false)
          }
        }
      }
  });
}

  //get the data
  get(keyname:any){
    return new Promise(async(resolve, reject)=>{
      if(db != undefined){
        const request = await db.transaction([this.storageName], "readwrite")
        .objectStore(this.storageName).get(keyname);

        request.onsuccess = await function(event: any){
          if(event.target.reset){
            console.log("success");
            resolve("success");
          }else {
            console.log("error");
            resolve( false)
          }
        }
      }
  });

  }
  //delete an entry
  delete(keyname: any){
    return new Promise(async(resolve, reject)=>{
      if(db != undefined){
        const request = await db.transaction([this.storageName], "readwrite")
        .objectStore(this.storageName).delete(keyname);

        request.onsuccess = await function(event: any){
          if(event.target.reset){
            console.log("success");
            resolve("success");
          }else {
            console.log("error");
            resolve( false)
          }
        }
      }
  });

  }

}
