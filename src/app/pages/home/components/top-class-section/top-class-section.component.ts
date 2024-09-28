import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

import { CommonModule } from '@angular/common';
import { HttpService } from '../../../../shared/services/http.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-class-section',
  standalone: true,
  imports: [CarouselModule, CommonModule, RouterLink],
  templateUrl: './top-class-section.component.html',
  styleUrl: './top-class-section.component.scss',
})
export class TopClassSectionComponent implements OnInit {
  constructor(private http: HttpService) {}
  cards = [
    {
      name: 'Name',
      major: 'Major',
      students: 500,
      courses: 1265,
      rate: 3.5,
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy",
    },
    {
      name: 'Name',
      major: 'Major',
      students: 500,
      courses: 1265,
      rate: 3.5,
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy",
    },
    {
      name: 'Name',
      major: 'Major',
      students: 500,
      courses: 1265,
      rate: 3.5,
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy",
    },
    {
      name: 'Name',
      major: 'Major',
      students: 500,
      courses: 1265,
      rate: 3.5,
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.  Lorem Ipsum has been the industry's standard dummy",
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },

      768: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  };

  getCourses() {
    // get teachers
    this.http.getData('api/dashbourd/getAllTeacherStudent').subscribe({
      next: (teachers) => {
        this.cards = teachers;
      },
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }
}
