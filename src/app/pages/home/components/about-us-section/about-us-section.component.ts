import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NumberFormatPipe } from '../../../../shared/pipes/number-format.pipe';

@Component({
  selector: 'app-about-us-section',
  standalone: true,
  imports: [RouterLink, NumberFormatPipe],
  templateUrl: './about-us-section.component.html',
})
export class AboutUsSectionComponent {
  reductionInAnnual = 80;
  users = 45000000;
}
