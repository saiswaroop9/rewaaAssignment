import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AlertService, UserService, AuthenticationService } from '../_services';
import { User } from '../_models/user';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({templateUrl: 'register.component.html',styleUrls:['./register.component.scss']})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            emailId: ['', [Validators.required, Validators.email]],
            phoneNo: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword:['', Validators.required],
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        let newUser=new User('',this.registerForm.value.firstName,this.registerForm.value.lastName,
                        this.registerForm.value.emailId,this.registerForm.value.phoneNo,this.registerForm.value.password);
        this.userService.register(newUser)
            .subscribe(data => {
                if(data['message']){
                    this.alertService.error(data['message'], true);
                    setTimeout(()=>{
                        this.alertService.clear();  
                    },20000);
                } else {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                    }
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
