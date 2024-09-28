import { Component, OnInit } from '@angular/core';
import { NumberFormatPipe } from '../../../../shared/pipes/number-format.pipe';
import { HttpService } from '../../../../shared/services/http.service';

@Component({
  selector: 'app-how-work-section',
  standalone: true,
  imports: [NumberFormatPipe],
  templateUrl: './how-work-section.component.html',
  styleUrl: './how-work-section.component.scss',
})
export class HowWorkSectionComponent implements OnInit {
  constructor(private http: HttpService) {}
  activeStudents: number = 45000;
  facultyCourses: number = 79000;
  bestProfessors: number = 156000;
  awardAchieved: number = 42000;

  // Get Courses

  getCourses() {
    this.http.getData('api/dashbourd/AllCourseDashbourd').subscribe({
      next: (courses: object[]) => {
        this.facultyCourses = courses.length > 79000 ? courses.length : 5000;
      },
    });
    // get teachers
    this.http.getData('api/dashbourd/getAllTeacherStudent').subscribe({
      next: (teachers) => {
        this.bestProfessors = teachers.length > 156000 ? teachers.length : 250;
      },
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }
}
