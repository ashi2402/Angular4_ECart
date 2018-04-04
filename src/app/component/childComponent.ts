import { Component, OnInit } from "@angular/core";
import {Router} from '@angular/router'
import {ChildService} from './services/childService';

@Component({
    selector:'child',
    template:`<div >
    <h3 >Mobile Details</h3>
    <table class="table table-hover">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Color</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr >
        <td>{{c[0].id}}</td>
    <td>{{c[0].name}}</td>
        <td>{{c[0].color}}</td>
        <td>{{c[0].price}}</td>
      </tr>
    </tbody>
  </table>
    
    <button (click)="backPage()" class="btn btn-success">Back</button>
    </div>
    `
})

export class childComponent implements OnInit{
    constructor( private router: Router, private ChildService:ChildService) {}; 

    child:boolean= false;

    c:any = JSON.parse(localStorage.getItem('mobileDetails'));
    
    ngOnInit(){
        console.log(this.c);
    }

    backPage(){
      //this.ChildService.setChild(n);
        this.router.navigate(['main']);
        
    }
   
}