import {CanActivate} from "@angular/router";

 export class AlwaysAuthGuard implements CanActivate {
    canActivate() {
      console.log("AlwaysAuthGuard");
      return true;
    }
  }

  export class UserService {
    isLoggedIn: boolean = false;
    
    public setValue(x:string){
      if(x){
        this.isLoggedIn = true;
      }
      else{
        this.isLoggedIn = false;
      }
      
    }  
    public  getValue(){
      return this.isLoggedIn
    }

 
  }