import { Component } from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms'; 
@Component({
    selector: 'contact-page',
    templateUrl: './contactPage.html'
})

export class ContactPage {
    form: FormGroup;

    constructor(private fb:FormBuilder){}

    ngOnInit(){
        this.form = this.fb.group({
            name: ['', [
                Validators.required]],
            password: ['', [
                Validators.required,
                Validators.minLength(8)]],    
        })
    }
}