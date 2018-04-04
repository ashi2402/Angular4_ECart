import { Injectable } from "@angular/core";


@Injectable()
export class myService{
    private userName:string

    constructor(){
        this.userName = '';
    }

    public setUserName(val:string):void{
        this.userName = val;
    }

    public getUserName():string{
        return this.userName;
    }
}