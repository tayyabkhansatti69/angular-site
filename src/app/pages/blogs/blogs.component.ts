import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ReturnArrayPipe } from '../../shared/pipes/return-array.pipe';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink, ReturnArrayPipe],
  templateUrl: './blogs.component.html',
})
export class BlogsComponent implements OnInit, OnChanges {
  // Active page
  activePage = 0;
  displayedCourses: object[];
  // Display limits
  limits = {
    start: 0,
    end: 5,
  };

  allBlogs: object[] = [
    {
      id: 1,
      img: 'https://picsum.photos/600',
      title:
        'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      description:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      views: '251232',
      author: {
        name: 'Lina',
        img: 'https://picsum.photos/600',
      },
    },
    {
      id: 1,
      img: 'https://picsum.photos/600',
      title:
        'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      description:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      views: '251232',
      author: {
        name: 'Lina',
        img: 'https://picsum.photos/600',
      },
    },
    {
      id: 1,
      img: 'https://picsum.photos/600',
      title:
        'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      description:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      views: '251232',
      author: {
        name: 'Lina',
        img: 'https://picsum.photos/600',
      },
    },
    {
      id: 1,
      img: 'https://picsum.photos/600',
      title:
        'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      description:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      views: '251232',
      author: {
        name: 'Lina',
        img: 'https://picsum.photos/600',
      },
    },
    {
      id: 1,
      img: 'https://picsum.photos/600',
      title:
        'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      description:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      views: '251232',
      author: {
        name: 'Lina',
        img: 'https://picsum.photos/600',
      },
    },
    {
      id: 1,
      img: 'https://picsum.photos/600',
      title:
        'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      description:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      views: '251232',
      author: {
        name: 'Lina',
        img: 'https://picsum.photos/600',
      },
    },
    {
      id: 1,
      img: 'https://picsum.photos/600',
      title:
        'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      description:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      views: '251232',
      author: {
        name: 'Lina',
        img: 'https://picsum.photos/600',
      },
    },
    {
      id: 1,
      img: 'https://picsum.photos/600',
      title:
        'Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution',
      description:
        'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
      views: '251232',
      author: {
        name: 'Lina',
        img: 'https://picsum.photos/600',
      },
    },
  ];

  // Handeling Students will displayed
  pagination(pageNum: number) {
    let start = pageNum * 6;
    let end = start + 6;
    this.displayedCourses = this.allBlogs.slice(start, end);
    // change limits
    this.limits.start = start;
    this.limits.end =
      end > this.allBlogs.length ? this.allBlogs.length - 1 : end - 1;
    // change active page
    this.activePage = pageNum;
  }

  // Chinaly Pagination
  chinalyPagination(increas: boolean = true) {
    // check direction
    let newIndex = increas ? this.activePage + 1 : this.activePage - 1;

    // check limits
    if (newIndex < 0) newIndex = 0;
    if (newIndex > this.allBlogs.length / 6)
      newIndex = Math.floor(this.allBlogs.length / 6);

    // change page
    this.pagination(newIndex);
  }

  ngOnInit(): void {
    this.displayedCourses = this.allBlogs?.slice(0, 12);
  }

  ngOnChanges() {
    this.displayedCourses = this.allBlogs?.slice(0, 12);
    this.limits = { start: 0, end: 11 };
  }
}
