import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Errors, UserService } from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.scss']
})
export class AuthComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  authForm: FormGroup;
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';
  validation_messages = {
    'firstName'   : [{ type: 'required', message: 'First name is required.' }],
    'lastName'    : [{ type: 'required', message: 'Last name is required.' }],
    'email'       : [
                      { type: 'required', message: 'Email is required.' },
                      { type: 'pattern', message: 'Please use correct format.' }
                    ],
    'employer'    : [{ type: 'required', message: 'Employer is required.' }],
    'mobileNumber': [{ type: 'required', message: 'Mobile number is required.' },
                    { type: 'pattern', message: 'Mobile number must contain only numbers.' }],
    'buySellSide' : [{ type: 'required', message: 'Buy or sell is required.' }]
    };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {

    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern)
      ]),
      employer: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [
                                          Validators.required,
                                          Validators.pattern('^[0-9]+$')
                                        ]),
      buySellSide: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {

    });
  }

  submitForm() {
    this.errors = {errors: {}};

    const credentials = this.authForm.value;
    credentials.device = 'web';
    this.userService
    .attemptAuth(this.authType, credentials)
    .subscribe(
      data => {
        if (data.error) {
          this.toastr.error('Account already exists, login to access the survey');
        } else {
          this.toastr.success('Verification email has been sent');
          this.authForm.reset();
        }

              },
      err => {
        this.errors = err;
      }
    );
  }

}
