import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpService } from '../../../../shared/services/http.service';

@Component({
  selector: 'app-latest-news-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news-section.component.html',
  styleUrl: './latest-news-section.component.scss',
})
export class LatestNewsSectionComponent implements OnInit {
  constructor(private http: HttpService) {}
  cards = [
    {
      imgUrl: 'https://picsum.photos/300/201',
      created_at: new Date(),
      course_name: 'Course Name',
    },
    {
      imgUrl: 'https://picsum.photos/300/202',
      created_at: new Date(),
      course_name: 'Course Name',
    },
    {
      imgUrl: 'https://picsum.photos/300/203',
      created_at: new Date(),
      course_name: 'Course Name',
    },
  ];

  sortByDate(array: any[], dateKey: string): any[] {
    return array.sort((a, b) => {
      return new Date(b[dateKey]).getTime() - new Date(a[dateKey]).getTime();
    });
  }

  getCourses() {
    this.http.getData('api/dashbourd/AllCourseDashbourd').subscribe({
      next: (courses: object[]) => {
        courses.map((c) => {
          // SET IMAGE TO EACH COURSE
          c['imgUrl'] = `https://picsum.photos/300/20${c['id']}`;
        });
        this.cards = this.sortByDate(courses, 'created_at');
        this.cards = this.cards.slice(0, 3);
      },
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }
}
