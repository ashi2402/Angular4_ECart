import { Component, Input,  OnInit } from "@angular/core";
import {Router} from '@angular/router'
import {LoginComponent} from './login';
import {myService} from './test_service';
import {MobileInterface} from './mobileInterface';
import {ChildService} from './services/childService';

@Component({
    selector: 'product-main',
    templateUrl: './product.main.html'

})
export class ProductMain implements  OnInit  {
    title:string = 'Your Favorite Online Mobile Shop!';
    products: any[] = [
        {name: "Iphone X",
        price: 100000,
        status:"Available",
        image:"app/images/new_apple.jpg",
        pid:115},
        {name: "Samsung Galaxy 8",
        price: 80000,
        status:"Available",
        image:"app/images/samsung-white.jpg",
        pid:120},
        {name: "Google Pixel 2",
        price: 65000,
        status:"Out of Stock!",
        image:"app/images/google_pixel.jpeg",
        pid:125}
    ]

     arrObject: any[] = [
        { pId: 115, productName: "Iphone X", productPrice: 100000, productAvailable: true, imageUrl: "app/images/new_apple.jpg", productDescription: 15, goldPrice: 100000, pinkPrice: 120000, silverPrice: 110000, imgPink: "app/images/iphone-red.jpg", imgSilver: "app/images/iphone-black.jpg" },
        { pId: 120, productName: "Samsung Galaxy 8", productPrice: 80000, productAvailable: true, imageUrl: "app/images/samsung-white.jpg", productDescription: 10, goldPrice: 80000, pinkPrice: 75000, silverPrice: 70000, imgPink: "app/images/samsung-red.jpg", imgSilver: "app/images/samsung-black.jpg" },
        { pId: 125, productName: "Google Pixel 2", productPrice: 65000, productAvailable: false, imageUrl: "app/images/pixel.jpg", productDescription: 8, goldPrice: 65000, pinkPrice: 55000, silverPrice: 60000, imgPink: "app/images/Google-Red.jpg", imgSilver: "app/images/google-pixel-black.jpg" }
    ];

    mobiles:MobileInterface[] = [
        {id:11, name:"Iphone X", color: "black", price: 100000},
        {id:12, name:"Samsung Note 8", color: "white", price: 80000},
        {id:13, name:"Google Pixel 2", color: "red", price: 70000},
        {id:14, name:"Motorola", color: "golden blue", price: 40000},
        {id:15, name:"Redmi Note 5", color: "black", price: 25000}
    ]


    child:boolean = true;
    // INPUT from parent
    //@Input() greetMessage: string ;
        userVal:string;
    constructor(private router: Router, private userService:myService, private ChildService:ChildService) { }

    // get service value
    ngOnInit() {
        this.userVal = this.userService.getUserName();
        //this.child = true;
      }

    getMobileDetails(id:number){
        let a:any[] = this.arrObject.filter((x)=>{return x.pId == id})
        console.log(a);
        
        localStorage.setItem('getData',JSON.stringify(a))
        this.router.navigate(['./mobile']);
    }
    
    idDetails(id:number){
       // this.child =  this.ChildService.setChild();
        this.child = false
       
        this.router.navigate(["/main/child", id])

      let b:MobileInterface[] =  this.mobiles.filter((y) =>{return y.id == id})

      localStorage.setItem('mobileDetails', JSON.stringify(b));
      console.log(b);
    }
    
}