import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
//import { ProductListComponent } from './product/product-list.Component';
import { productDisplay } from './product.display';
//import {DogListComponent} from './product/dog-list.component';
import {ProductMain} from './product.main';
import { CartComponent } from './cart';
import { CheckOut } from './checkout';
import {LoginComponent} from './login';
import { signUp } from './signup';
import {CanActivate} from "@angular/router";
import {OnlyLoggedInUsersGuard} from './services/loggedInService';
import {childComponent} from './childComponent';
import {ContactPage} from './Contact';

export const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'mobile', component: productDisplay, canActivate: [OnlyLoggedInUsersGuard] },
    { path: 'cart', component: CartComponent, canActivate: [OnlyLoggedInUsersGuard] },
    { path: 'check', component: CheckOut, canActivate: [OnlyLoggedInUsersGuard] },
    { path: 'contact', component: ContactPage, canActivate: [OnlyLoggedInUsersGuard] },
    { path: 'main', component: ProductMain, canActivate: [OnlyLoggedInUsersGuard], 
        children:[
            {path:'child/:id', component:childComponent}
        ]
},
    { path: 'sign', component: signUp }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: false });