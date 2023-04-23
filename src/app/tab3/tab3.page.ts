import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  isName = Boolean(false); 
  checkName = localStorage.getItem('username')!;

  constructor(private router: Router) {}
  ngOnInit(){
    this.checker(this.checkName); 
    console.log(this.checkName); 
  }
  
  checker(checkName:String) {
    if(checkName != ""){
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
