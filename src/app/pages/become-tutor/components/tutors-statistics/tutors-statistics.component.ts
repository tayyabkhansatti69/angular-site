import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NumberFormatPipe } from '../../../../shared/pipes/number-format.pipe';

@Component({
  selector: 'app-tutors-statistics',
  standalone: true,
  imports: [NumberFormatPipe],
  templateUrl: './tutors-statistics.component.html',
  styleUrl: './tutors-statistics.component.scss',
})
export class TutorsStatisticsComponent {
  students = 61100;
  certifiedInstructor = 26000;
  countryLanguage = 72;
  successRate = 99.9;
  trustedCompanies = 57;
}
