import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-subscribe-section',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './subscribe-section.component.html',
  styleUrl: './subscribe-section.component.scss',
})
export class SubscribeSectionComponent implements OnInit {
  constructor() {}
  subsForm: FormGroup;

  OnSubsSubmit() {}

  ngOnInit(): void {
    this.subsForm = new FormGroup({
      email: new FormControl<string>(null, [
        Validators.required,
        Validators.email,
      ]),
    });
  }
}
