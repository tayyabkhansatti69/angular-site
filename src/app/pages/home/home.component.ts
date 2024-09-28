import { Component } from '@angular/core';
import { LandingComponent } from './components/landing/landing.component';
import { AboutUsSectionComponent } from './components/about-us-section/about-us-section.component';
import { ExploringSectionComponent } from './components/exploring-section/exploring-section.component';
import { TrendingSectionComponent } from './components/trending-section/trending-section.component';
import { HowWorkSectionComponent } from './components/how-work-section/how-work-section.component';
import { LatestNewsSectionComponent } from './components/latest-news-section/latest-news-section.component';
import { SubscribeSectionComponent } from './components/subscribe-section/subscribe-section.component';
import { TopClassSectionComponent } from './components/top-class-section/top-class-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LandingComponent,
    TrendingSectionComponent,
    AboutUsSectionComponent,
    ExploringSectionComponent,
    SubscribeSectionComponent,
    HowWorkSectionComponent,
    TopClassSectionComponent,
    LatestNewsSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
