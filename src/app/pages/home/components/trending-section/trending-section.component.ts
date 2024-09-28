import { Component, OnInit } from '@angular/core';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { HttpService } from '../../../../shared/services/http.service';

@Component({
  selector: 'app-trending-section',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './trending-section.component.html',
  styleUrl: './trending-section.component.scss',
})
export class TrendingSectionComponent implements OnInit {
  constructor(private http: HttpService) {}
  teachersNums = {
    english: 0,
    spanish: 0,
    french: 0,
    german: 0,
    italian: 0,
    arabic: 0,
  };

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['←', '→'],
    responsive: {
      0: {
        items: 1,
      },
      556: {
        items: 3,
      },
      768: {
        items: 4,
      },
      991: {
        items: 6,
      },
    },
    nav: true,
  };

  getData() {
    // get teachers
    this.http.getData('api/dashbourd/getAllTeacherStudent').subscribe({
      next: (teachers: object[]) => {
        let groupedTeachers = this.groupBy(teachers, 'major');
        for (let key in groupedTeachers) {
          this.teachersNums[key] = groupedTeachers[key].length;
        }
      },
    });
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

  ngOnInit(): void {
    this.getData();
  }
}
