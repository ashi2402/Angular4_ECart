import { Component } from "@angular/core";
import {Router} from '@angular/router'
import {cart} from './CartInterface';

@Component({
    selector: 'product-display',
    templateUrl:'./product.display.html'
})



export class productDisplay {
    
    constructor(public router: Router) { }

    a:any[] = JSON.parse(localStorage.getItem('getData'));
        imageurlDemo: any=this.a[0].imageUrl;
        imagePrice: any = this.a[0].productPrice;

    getMobileByColor(color:string){
        this.imageurlDemo = this.a[0].imgPink;

        let cartVal:cart =<any>{};
        cartVal.cartName = this.a[0].productName;
        cartVal.cartPrice = this.a[0].productPrice;
            
        switch(color){
            case 'gold': {
                this.imageurlDemo = this.a[0].imageUrl;
                this.imagePrice = this.a[0].productPrice;
                cartVal.cartName = this.a[0].productName;
                cartVal.cartPrice = this.a[0].productPrice;
                break;
            }
            case 'pink':{
                this.imageurlDemo = this.a[0].imgPink;
                this.imagePrice = this.a[0].pinkPrice;
                cartVal.cartName = this.a[0].productName;
                cartVal.cartPrice = this.a[0].pinkPrice;
                break;
            }
            case 'silver': {
                this.imageurlDemo = this.a[0].imgSilver;
                this.imagePrice = this.a[0].silverPrice;
                cartVal.cartName = this.a[0].productName;
                cartVal.cartPrice = this.a[0].silverPrice;
                break;
            }
            default: {
                this.imageurlDemo = this.a[0].imageUrl;
                break;
            }
        }
        console.log(cartVal.cartPrice);
        localStorage.setItem('valCart',JSON.stringify(cartVal));
    }

    addtoCart(){

        this.router.navigate(['./cart']);
    }

    }