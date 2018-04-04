import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import {LoginInterface} from './loginInterface';
import {Router} from '@angular/router'


@Component({
    selector: 'sigh-up',
    templateUrl: './signup.html'
})
export class signUp {

    constructor(public router: Router) { }

    data:any = [];
    saveData(loginData: NgForm): void{
        
        if(localStorage.getItem('val')){
            this.data =JSON.parse(localStorage.getItem('val'));
        }
           
        let singVal:LoginInterface = <any>{};

        // get the value from user input
        singVal.username= loginData.value.name;
        singVal.password = loginData.value.password;

        //check username
        let returnData = this.data.filter((x:any)=>{return x.username==singVal.username})
        if(returnData.length>0){
            alert('This user is exist')
        }
        else{
            // save in array
            this.data.push(singVal)
            console.log(this.data);
            alert('Registration complete sucessfully');
         // save in localStorage
          localStorage.setItem('val', JSON.stringify(this.data))
          let signData = JSON.parse(localStorage.getItem('val'));
          console.log(signData);
          this.router.navigate(['']);
        }
        
       
      }
      log(){
        this.router.navigate(['']);
      }

}