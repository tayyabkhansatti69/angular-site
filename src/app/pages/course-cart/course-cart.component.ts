import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-cart',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './course-cart.component.html',
  styleUrl: './course-cart.component.scss',
})
export class CourseCartComponent implements OnInit {
  cartForm: FormGroup;

  cartFormSubmit() {}

  ngOnInit(): void {
    this.cartForm = new FormGroup({
      name: new FormControl(),
      number: new FormControl(),
      expirDate: new FormControl(),
      cvc: new FormControl(),
      saveInfo: new FormControl(),
    });
  }
}
