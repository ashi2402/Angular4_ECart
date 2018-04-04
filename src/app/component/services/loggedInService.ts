import { Injectable } from "@angular/core";
import {CanActivate} from "@angular/router";
import {UserService} from './guardService';
import {Router} from '@angular/router'

@Injectable()
export class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private userService: UserService, private router: Router) {}; 

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.userService.isLoggedIn) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); 
      this.router.navigate(['']);
      return false;
      
    }
  }
}
