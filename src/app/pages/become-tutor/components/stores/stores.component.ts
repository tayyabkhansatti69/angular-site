import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss',
})
export class StoresComponent implements OnInit {
  quots = ['Quot One', 'Quot Two'];

  selectedQuot: string;
  selectedQuotIndex = 0;

  selectCard(direction: string = 'next') {
    if (direction == 'next') {
      if (this.selectedQuotIndex < this.quots.length - 1)
        ++this.selectedQuotIndex;
    } else {
      if (this.selectedQuotIndex > 0) --this.selectedQuotIndex;
    }
    this.selectedQuot = this.quots[this.selectedQuotIndex];
  }

  ngOnInit(): void {
    this.selectedQuot = this.quots[this.selectedQuotIndex];
  }
}
