import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../../shared/services/http.service';
import { FormService } from '../../../shared/services/form.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent implements OnInit {
  constructor(
    private http: HttpService,
    private formService: FormService,
    private router: Router
  ) {}

  signUpForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null),
    photo: new FormControl(null),
    role: new FormControl('student'),
    major: new FormControl(null, Validators.required),
    grade: new FormControl(null, Validators.required),
    age: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  submitSignUP(data: FormGroup) {
    console.log(data.value);
    this.checkPass(data);
    if (data.valid) {
      const apiLink =
        data.get('role').value == 'teacher'
          ? 'api/teacher/signup'
          : 'api/auth/registerStudent';

      // send data to server
      this.http.addData(apiLink, data.value).subscribe({
        next: () => {
          // store data in local storage
          localStorage.setItem('email', data.get('email').value);

          // navigate to verify code page
          this.router.navigate([`/auth/verify-code`]);
        },
        error: (res) => {
          if (res.error.message.match(/The|email|has|already|been|taken/)) {
            const msg = $localize`The email has already been taken!`;
            this.formService.toastMsg({ status: 'danger', msg: msg });
          }
        },
      });
    }
  }

  onFileChange = this.formService.fileChange;
  checkPass(data: FormGroup): void {
    if (!data.get('password').valid) {
      // not recommended
      const msg = $localize`The password field must be at least 8 characters.`;
      this.formService.toastMsg({ status: 'danger', msg: msg });
    } else if (data.get('password').value !== data.get('rePassword').value) {
      // Not Matched
      const msg = $localize`Unmatched Passwords!`;
      this.formService.toastMsg({ status: 'danger', msg: msg });
    }
  }

  ngOnInit(): void {
    localStorage.setItem('email', 'aml@gmail.com');
  }
}
