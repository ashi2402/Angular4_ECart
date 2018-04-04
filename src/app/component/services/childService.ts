import { Injectable } from "@angular/core";



@Injectable()

export class ChildService {
    isChildShow:boolean;

    public setChild():any{
      
        
    }

    public getChild(){
        return this.isChildShow
    }

}