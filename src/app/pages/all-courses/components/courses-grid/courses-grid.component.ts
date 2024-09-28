import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

import { ReturnArrayPipe } from '../../../../shared/pipes/return-array.pipe';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NumberFormatPipe } from '../../../../shared/pipes/number-format.pipe';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses-grid',
  standalone: true,
  imports: [
    ReturnArrayPipe,
    ReactiveFormsModule,
    CommonModule,
    NumberFormatPipe,
    RouterLink,
  ],
  templateUrl: './courses-grid.component.html',
  styleUrl: './courses-grid.component.scss',
})
export class CoursesGridComponent implements OnInit, OnChanges {
  constructor(private router: Router) {}
  @Input() coursesList: object[];

  video;
  sortingForm: FormGroup;
  displayGrid: boolean = true;
  // Active page
  activePage = 0;
  displayedCourses: object[];
  // Display limits
  limits = {
    start: 0,
    end: 11,
  };

  onSorting() {
    if (this.sortingForm.get('sortBy').value === 'popular') {
      this.displayedCourses.sort((a, b) =>
        +a['rate'] > +b['rate'] ? 1 : +b['rate'] > +a['rate'] ? -1 : 0
      );
    } else if (this.sortingForm.get('sortBy').value === 'alphabetic') {
      this.displayedCourses.sort((a, b) =>
        a['course_name'] > b['course_name']
          ? 1
          : b['course_name'] > a['course_name']
          ? -1
          : 0
      );
    } else if (this.sortingForm.get('sortBy').value === 'price-ascending') {
      this.displayedCourses.sort((a, b) =>
        +a['price'] > +b['price'] ? 1 : +b['price'] > +a['price'] ? -1 : 0
      );
    } else if (this.sortingForm.get('sortBy').value === 'price-descending') {
      this.displayedCourses.sort((a, b) =>
        +a['price'] < +b['price'] ? 1 : +b['price'] < +a['price'] ? -1 : 0
      );
    }
  }

  // Handeling Students will displayed
  pagination(pageNum: number) {
    let start = pageNum * 12;
    let end = start + 12;
    this.displayedCourses = this.coursesList.slice(start, end);
    // change limits
    this.limits.start = start;
    this.limits.end =
      end > this.coursesList.length ? this.coursesList.length - 1 : end - 1;
    // change active page
    this.activePage = pageNum;
  }

  // Chinaly Pagination
  chinalyPagination(increas: boolean = true) {
    // check direction
    let newIndex = increas ? this.activePage + 1 : this.activePage - 1;

    // check limits
    if (newIndex < 0) newIndex = 0;
    if (newIndex > this.coursesList.length / 12)
      newIndex = Math.floor(this.coursesList.length / 12);

    // change page
    this.pagination(newIndex);
  }

  ngOnInit() {
    // sorting form
    this.sortingForm = new FormGroup({
      sortBy: new FormControl('popular'),
    });
  }

  ngOnChanges() {
    this.displayedCourses = this.coursesList?.slice(0, 12);
    this.limits = { start: 0, end: 11 };

    this.sortingForm = new FormGroup({
      sortBy: new FormControl('popular'),
    });
  }
}
