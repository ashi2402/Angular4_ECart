import { NgModule }      from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { appRoutes }  from './component/route';
import { productDisplay } from './component/product.display';
import {routing} from './component/route';
//import {DogListComponent} from './product/dog-list.component';
import {ProductMain} from './component/product.main';
import {CartComponent} from './component/cart';
import { CheckOut } from './component/checkout';
import {LoginComponent} from './component/login';
import {signUp} from './component/signup';
import {myService} from './component/test_service';
import {OnlyLoggedInUsersGuard} from './component/services/loggedInService';
import {UserService} from './component/services/guardService';
import {childComponent} from './component/childComponent';
import {ChildService} from './component/services/childService';


@NgModule({
  imports:      [ BrowserModule,routing, FormsModule ],
  declarations: [ AppComponent, productDisplay, ProductMain, CartComponent, CheckOut, LoginComponent, signUp, childComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [myService, OnlyLoggedInUsersGuard, UserService, ChildService]
})
export class AppModule { }
