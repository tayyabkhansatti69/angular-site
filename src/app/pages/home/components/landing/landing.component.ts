import { Component, OnInit } from '@angular/core';
import { NumberFormatPipe } from '../../../../shared/pipes/number-format.pipe';
import { HttpService } from '../../../../shared/services/http.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NumberFormatPipe, RouterLink],
  templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit {
  constructor(private http: HttpService) {}

  landingImg: string = 'https://picsum.photos/301';

  videosCoursesNum: number = 2000;
  onlineCoursesNum: number = 5000;
  tutorNum: number = 250;

  ngOnInit(): void {
    this.http.getData('api/dashbourd/AllCourseDashbourd').subscribe({
      next: (courses: object[]) => {
        this.videosCoursesNum = courses.length > 2000 ? courses.length : 2000;
        this.onlineCoursesNum = courses.length > 5000 ? courses.length : 5000;
      },
    });
    // get teachers
    this.http.getData('api/dashbourd/getAllTeacherStudent').subscribe({
      next: (teachers) => {
        this.tutorNum = teachers.length > 250 ? teachers.length : 250;
      },
    });
  }
}
