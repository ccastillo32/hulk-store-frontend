import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RoutingService } from '../../routing/routing.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    loading: boolean = false;
    formSubmitted: boolean = false; 

    loginForm = new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    constructor() {

    }

    ngOnInit() {

    }

    login(): void {

        this.formSubmitted = true;

        if(this.loginForm.valid) {
            console.log('Is valid');
        }

    }

    isEmpty(fieldName: string): boolean {
        return this.loginForm.get(fieldName).hasError('required') 
                && (this.loginForm.get(fieldName).touched || this.formSubmitted)
    }

}