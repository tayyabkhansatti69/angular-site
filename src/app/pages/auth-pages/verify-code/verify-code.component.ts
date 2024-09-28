import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './verify-code.component.html',
})
export class VerifyCodeComponent implements OnInit {
  constructor(private http: HttpService) {}

  email: string;
  verifyForm: FormGroup;
  showCode: boolean = false;

  // submiting code
  submitVerifyForm() {
    if (this.verifyForm.valid) {
      // this.http
      //   .addData(endpoint, data)
      //   .subscribe({ next: () => {}, error: () => {} });
    }
  }

  ngOnInit(): void {
    this.verifyForm = new FormGroup({
      code: new FormControl(null, Validators.required),
    });
  }
}
