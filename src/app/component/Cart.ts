import { Component } from "@angular/core";


@Component({
    selector:'cart',
    templateUrl:'./cart.html'
})

export class CartComponent{

    cartData:any = JSON.parse(localStorage.getItem('valCart'));
    finalPrice:number = this.cartData.cartPrice;
    name:number;
    //mobCount:any[]= [{id:1, val:1}, {id:2, val:2}, {id:3, val:3}]
   // add:any = {val:this.mobCount[0]};
    selection:number = 1;
    returnVal:number;
    selectionChanged(){
        console.log(this.selection);
        this.finalPrice = this.selection* this.cartData.cartPrice;
        //this.returnVal = this.selection;
    }
}