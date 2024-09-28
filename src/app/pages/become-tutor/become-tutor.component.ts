import { Component } from '@angular/core';
import { TutorsStatisticsComponent } from './components/tutors-statistics/tutors-statistics.component';
import { TeachingFeaturesComponent } from './components/teaching-features/teaching-features.component';
import { AdviceComponent } from './components/advice/advice.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { CallCenterComponent } from './components/call-center/call-center.component';
import { StoresComponent } from './components/stores/stores.component';

@Component({
  selector: 'app-become-tutor',
  standalone: true,
  imports: [
    TutorsStatisticsComponent,
    TeachingFeaturesComponent,
    AdviceComponent,
    CreateProfileComponent,
    CallCenterComponent,
    StoresComponent,
  ],
  templateUrl: './become-tutor.component.html',
})
export class BecomeTutorComponent {}
