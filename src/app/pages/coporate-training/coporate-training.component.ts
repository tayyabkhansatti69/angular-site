import { Component } from '@angular/core';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { CallCenterComponent } from './components/call-center/call-center.component';
import { NumberFormatPipe } from '../../shared/pipes/number-format.pipe';
import { HttpService } from '../../shared/services/http.service';
import { LatestNewsSectionComponent } from '../home/components/latest-news-section/latest-news-section.component';

@Component({
  selector: 'app-coporate-training',
  standalone: true,
  imports: [
    CreateProfileComponent,
    CallCenterComponent,
    NumberFormatPipe,
    LatestNewsSectionComponent,
  ],
  templateUrl: './coporate-training.component.html',
  styles: ``,
})
export class CoporateTrainingComponent {
  constructor(private http: HttpService) {}

  persentageData = {
    support: 81,
    useLangs: 74,
    agreeLangs: 83,
  };

  siteAnalicis = {
    activeStudents: 45000,
    facultyCourses: 79000,
    bestProfessors: 156000,
    awardAchieved: 42000,
  };

  getCourses() {
    this.http.getData('api/dashbourd/AllCourseDashbourd').subscribe({
      next: (courses: object[]) => {
        this.siteAnalicis.facultyCourses =
          courses.length > 79000 ? courses.length : 5000;
      },
    });
    // get teachers
    this.http.getData('api/dashbourd/getAllTeacherStudent').subscribe({
      next: (teachers) => {
        this.siteAnalicis.bestProfessors =
          teachers.length > 156000 ? teachers.length : 250;
      },
    });
  }
}
