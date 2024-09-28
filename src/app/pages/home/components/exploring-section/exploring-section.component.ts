import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { ReturnArrayPipe } from '../../../../shared/pipes/return-array.pipe';
import { HttpService } from '../../../../shared/services/http.service';
import { NumberFormatPipe } from '../../../../shared/pipes/number-format.pipe';

@Component({
  selector: 'app-exploring-section',
  standalone: true,
  imports: [CarouselModule, CommonModule, ReturnArrayPipe, NumberFormatPipe],
  templateUrl: './exploring-section.component.html',
  styleUrl: './exploring-section.component.scss',
})
export class ExploringSectionComponent implements OnInit {
  constructor(private http: HttpService) {}
  cards: object[] = [
    {
      imgUrl: 'https://picsum.photos/300',
      subject: 'English',
      course_name: 'Name',
      price: '254',
      teacher: {
        name: 'Name',
        created_at: new Date(),
      },
    },
    {
      imgUrl: 'https://picsum.photos/301',
      subject: 'English',
      course_name: 'Name',
      price: '254',
      teacher: {
        name: 'Name',
        created_at: new Date(),
      },
    },
    {
      imgUrl: 'https://picsum.photos/302',
      subject: 'English',
      course_name: 'Name',
      price: '254',
      teacher: {
        name: 'Name',
        created_at: new Date(),
      },
    },
  ];

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
      768: {
        items: 2,
      },
      991: {
        items: 3,
      },
    },
    nav: true,
  };

  // Get Courses
  getCourses() {
    this.http.getData('api/dashbourd/AllCourseDashbourd').subscribe({
      next: (courses: object[]) => {
        // get teachers
        this.http.getData('api/dashbourd/getAllTeacherStudent').subscribe({
          next: (teachers) => {
            // merge courses with teachers
            courses.map((c) => {
              c['teacher'] = teachers.find(
                (t: any) => c['teacher_id'] === t.id
              );

              // delete unused key "teacher_id"
              delete c['teacher_id'];

              // SET IMAGE TO EACH COURSE
              c['imgUrl'] = `https://picsum.photos/300/20${c['id']}`;
            });

            // set res to local var
            this.cards = courses;
          },
        });
      },
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }
}
