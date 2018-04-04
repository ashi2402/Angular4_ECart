import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {myService} from './test_service';
import {UserService} from './services/guardService';

@Component({
  selector: 'login-page',
  templateUrl: './login.html'
})

export class LoginComponent  {
  title = 'Angular 5 Login';
  // creadencials: string = "User: Admin, Password: 456";
  userName: string;
  password: string;
  constructor(private router: Router, private userService:myService, private UserService:UserService) {}

  saveData(loginData: NgForm): void{
    this.userName = loginData.value.name;
    this.password = loginData.value.password;
    //console.log(loginData.value.name);
    let data = JSON.parse(localStorage.getItem('val'));
    let loginVal = data.filter((x:any)=>{return x.username == this.userName})
    if(loginVal.length!=0){
      if( this.userName == loginVal[0].username && this.password == loginVal[0].password){

        // guard service
        this.UserService.setValue(this.userName);

// set service value
        this.userService.setUserName(loginVal[0].username);

        //console.log("Successfully logged...");
        this.router.navigate(['main']);      
      }   
      else{
        alert('Credentials are Wrong')
        console.log("Not right user....");
      }
    }
    else{
      alert("User doesn't exist");
    }
    
  }
}