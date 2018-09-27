import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Errors, UserService } from '../../core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit {
  authType: String = '';
  title: String = '';
  errors: Errors = {errors: {}};
  authForm: FormGroup;
  validation_messages = {
    'email'       : [
                      { type: 'required', message: 'Email is required.' },
                      { type: 'pattern', message: 'Please use correct format.' }
                    ]
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

      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]),
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
    this.userService.attemptLogin(this.authType, credentials)
    .subscribe(
      data => {
        if (data.error) {
            this.toastr.error(data.message);
        } else {
          this.authForm.reset();
            this.toastr.success(data.message);
        }
              },
      err => {
        this.toastr.error('No user found.');
      }
    );
  }
}
