import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CoursesGridComponent } from './components/courses-grid/courses-grid.component';
import { HttpService } from '../../shared/services/http.service';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [SidebarComponent, CoursesGridComponent],
  templateUrl: './all-courses.component.html',
})
export class AllCoursesComponent implements OnInit {
  constructor(private http: HttpService) {}

  // all courses
  allCourses: object[] = [
    {
      id: 1,
      imgUrl: 'https://picsum.photos/300',
      subject: 'subject',
      course_name: 'course_name',
      price: '125',
      rate: {
        TotalStar: '3.5',
      },
      teacher: {
        name: 'name',
      },
    },
    {
      id: 2,
      imgUrl: 'https://picsum.photos/301',
      subject: 'subject',
      course_name: 'course_name',
      price: '125',
      rate: {
        TotalStar: '3.5',
      },
      teacher: {
        name: 'name',
      },
    },
    {
      id: 3,
      imgUrl: 'https://picsum.photos/302',
      subject: 'subject',
      course_name: 'course_name',
      price: '125',
      rate: {
        TotalStar: '3.5',
      },
      teacher: {
        name: 'name',
      },
    },
  ];

  // filtered courses
  filteredCourses: object[] = this.allCourses;

  // Get Courses
  getCourses() {
    this.http.getData('api/dashbourd/getAllCourseWithDetails').subscribe({
      next: (courses: object[]) => {
        // reformat response
        courses.map((c) => {
          Object.assign(c, c['course']);
          c['teacher'] = c['DatForTeacher'];
          c['rate'] = c['RateForThisCourse'];

          delete c['course'];
          delete c['DatForTeacher'];
          delete c['RateForThisCourse'];

          // SET IMAGE TO EACH COURSE
          c['imgUrl'] = `https://picsum.photos/300/20${c['id']}`;
        });
        // set res to local var
        this.allCourses = courses;
        this.filteredCourses = courses;
      },
    });
  }

  // Update Courses
  onFiltering(data: any) {
    this.filteredCourses = data;
  }

  ngOnInit(): void {
    this.getCourses();
  }
}
