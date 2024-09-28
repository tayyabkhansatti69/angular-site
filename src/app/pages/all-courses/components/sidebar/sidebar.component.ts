import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { ReturnArrayPipe } from '../../../../shared/pipes/return-array.pipe';
import { CommonModule } from '@angular/common';
import { KeysArrayPipe } from '../../../../shared/pipes/keys-array.pipe';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ReturnArrayPipe,
    CommonModule,
    KeysArrayPipe,
    KeysArrayPipe,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements OnInit, OnChanges {
  @Output() filtering: EventEmitter<any> = new EventEmitter<any>();
  @Input() coursesList: object[];

  constructor(private builder: FormBuilder) {}

  filteredCourses: object[] = [];

  filteringForm: FormGroup;
  categoriesClassification: object;
  levelClassification: object;
  instructorsClassification: object;
  languageClassification: object;
  priceClassification: object;
  rateClassification: object;

  onSubmitFilter() {
    this.filteredCourses = [];
    for (let key in this.filteringForm.value) {
      for (let innerKey in this.filteringForm.value[key]) {
        if (this.filteringForm.value[key][innerKey]) {
          // add selected courses
          this.filteredCourses = [
            ...this.filteredCourses,
            ...this[`${key}Classification`][innerKey],
          ];
        }
      }
    }
    // merge repeated courses
    this.mergeCourses(this.filteredCourses);
    if (!this.filteredCourses.length)
      this.filteredCourses = [...this.coursesList];

    // emit courses
    this.filtering.emit(this.filteredCourses);
  }

  mergeCourses(courses: object[]) {
    for (let cPointer1 = 0; cPointer1 < courses.length - 1; cPointer1++) {
      for (
        let cPointer2 = cPointer1 + 1;
        cPointer2 < courses.length;
        cPointer2++
      ) {
        if (courses[cPointer1]['id'] === courses[cPointer2]['id'])
          courses.splice(cPointer2, 1);
      }
    }
  }

  groupBy(items: any, key: string, innerKey = null) {
    return items.reduce((result, item) => {
      const value = innerKey ? item[key]?.[innerKey] : item[key];
      if (!result[value]) {
        result[value] = [];
      }
      result[value].push({ ...item });
      return result;
    }, {});
  }

  groupByPrice(items: any, key: string = 'price') {
    return items.reduce(
      (result, item) => {
        item[key] ? result['paid'].push(item) : result['free'].push(item);
        return result;
      },
      { free: [], paid: [] }
    );
  }

  groupByRate(items: any, key: string = 'rate', innerKey = 'TotalStar') {
    return items.reduce((result, item) => {
      let value = innerKey ? item[key]?.[innerKey] : item[key];
      value = Math.round(+value);
      if (!result[value]) {
        result[value] = [];
      }
      result[value].push({ ...item });
      return result;
    }, {});
  }

  ngOnInit(): void {
    this.filteringForm = this.builder.group({
      categories: this.builder.group({}),
      language: this.builder.group({}),
      price: this.builder.group({}),
      level: this.builder.group({}),
      instructors: this.builder.group({}),
      ratings: this.builder.group({}),
    });
  }

  ngOnChanges(): void {
    if (this.coursesList) {
      // Category Classification
      this.categoriesClassification = this.groupBy(this.coursesList, 'subject');
      for (let key in this.categoriesClassification) {
        (this.filteringForm.get('categories') as FormGroup).addControl(
          key,
          new FormControl(null)
        );
      }

      // Price Classification
      this.priceClassification = this.groupByPrice(this.coursesList, 'price');
      for (let key in this.priceClassification) {
        (this.filteringForm.get('price') as FormGroup).addControl(
          key,
          new FormControl(null)
        );
      }

      // Level Classification
      this.levelClassification = this.groupBy(this.coursesList, 'level');
      for (let key in this.levelClassification) {
        (this.filteringForm.get('level') as FormGroup).addControl(
          key,
          new FormControl(null)
        );
      }

      // Instructors Classification
      this.instructorsClassification = this.groupBy(
        this.coursesList,
        'teacher',
        'name'
      );
      for (let key in this.instructorsClassification) {
        (this.filteringForm.get('instructors') as FormGroup).addControl(
          key,
          new FormControl(null)
        );
      }

      // Language Classification
      this.languageClassification = this.groupBy(
        this.coursesList,
        'teacher',
        'major'
      );
      for (let key in this.languageClassification) {
        (this.filteringForm.get('language') as FormGroup).addControl(
          key,
          new FormControl(null)
        );
      }

      // Rate Classification
      this.rateClassification = this.groupByRate(
        this.coursesList,
        'rate',
        'TotalStar'
      );
      for (let key in this.rateClassification) {
        (this.filteringForm.get('ratings') as FormGroup).addControl(
          key,
          new FormControl(null)
        );
      }

      console.log(this.rateClassification);
    }
  }
}
