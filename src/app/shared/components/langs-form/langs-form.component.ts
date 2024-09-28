import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-langs-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './langs-form.component.html',
  styleUrl: './langs-form.component.scss',
})
export class LangsFormComponent {}
