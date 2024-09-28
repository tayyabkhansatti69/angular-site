import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-set-new-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './set-new-password.component.html',
})
export class SetNewPasswordComponent implements OnInit {
  constructor() {}

  setPasswordForm: FormGroup;
  showPassword: boolean = false;
  showConPassword: boolean = false;

  submitSetPassword() {}

  ngOnInit(): void {
    this.setPasswordForm = new FormGroup({
      password: new FormControl(null, Validators.required),
      confirmPassword: new FormControl(null, Validators.required),
    });
  }
}
