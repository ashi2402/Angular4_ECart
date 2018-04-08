import { Component } from '@angular/core';
import {myService} from './component/test_service';
import {Router} from '@angular/router';


@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top" *ngIf="userValidation.length!=0">

    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" 
      data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Mobile Cart</a>
    </div>
    <div id="navbar" class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li><a [routerLink]='["/list"]'>Dashboard</a></li>
        <li><a [routerLink]='["/main"]'>Home</a></li>
       <li><a [routerLink]='["/mobile"]'>Details</a></li>
       
      </ul>
   
     <div class="pullright" style="margin-top:16px; color:#fff">
      <span>Hello, {{name}}</span>
    <button class="btn btn-info pull-right" (click)="logOut()">Logout</button>
 </div>
   
  </div>   
</nav> 
  <router-outlet></router-outlet>
  `
})
export class AppComponent{ 
  constructor(private userService:myService, private router: Router) { }
  name:string ; 
  userValidation:string = '';

  ngAfterContentChecked(){
    this.name = this.userService.getUserName();
    this.userValidation = this.userService.getUserName();
  }
logOut(){
  this.userService.setUserName('');
  this.router.navigate(['']);

// var backlen = history.length;
//      history.go(-backlen);
     window.location.href = '';
 
}
}
