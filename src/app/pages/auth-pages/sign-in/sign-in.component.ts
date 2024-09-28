import { Component, OnInit } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/services/auth.service';
import { FormService } from '../../../shared/services/form.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, CommonModule],
  templateUrl: './sign-in.component.html',
})
export class SignInComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private formService: FormService,
    private router: Router
  ) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    role: new FormControl('student'),
    rememberMe: new FormControl(null),
  });

  submitLogin(data: FormGroup) {
    this.checkPass(data);
    if (data.valid) {
      // ======================================================
      // store in localstorage
      localStorage.setItem('token', 'this.is.token');
      localStorage.setItem('user', JSON.stringify({ Role: data.value.role }));
      localStorage.setItem('loginTime', new Date().toISOString());
      // routing
      this.router.navigate(['']);
      // ======================================================
      // init login data
      let body = {
        email: data.value.email,
        password: data.value.password,
      };

      const endPoint =
        data.value.role == 'teacher' ||
        data.value.role == 'manager' ||
        data.value.role == 'admin'
          ? `${data.value.role}/login`
          : 'auth/loginStudent';

      // send request
      this.auth.login(endPoint, body).subscribe({
        next: (res) => {
          // RememberMe
          data.value.rememberMe
            ? localStorage.setItem('rememberMe', 'true')
            : localStorage.removeItem('rememberMe');

          // routing
          this.router.navigate(['']);
        },
        error: (err) => {
          // show msg
          const msg = $localize`The Email Or Password Is Incorrect.`;
          this.formService.toastMsg({ status: 'danger', msg: msg });
          data.reset();
          console.log(err);
        },
      });
    }
  }

  checkPass(data: FormGroup): void {
    if (!data.get('email').valid) {
      const msg = $localize`Email Is Required.`;
      this.formService.toastMsg({ status: 'danger', msg: msg });
    } else if (!data.get('password').valid) {
      data.get('password').reset();
      const msg = $localize`The password field must be at least 8 characters.`;
      this.formService.toastMsg({ status: 'danger', msg: msg });
    }
  }

  ngOnInit(): void {
    // Check saved login
    if (localStorage.getItem('rememberMe')) {
      let loginData = JSON.parse(localStorage.getItem('user')!);
      this.loginForm.patchValue(loginData);
    }
  }
}
