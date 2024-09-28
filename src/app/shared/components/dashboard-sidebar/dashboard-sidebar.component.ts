import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { UserRoleDirective } from '../../directives/user-type-permission.directive';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, UserRoleDirective],
  templateUrl: './dashboard-sidebar.component.html',
})
export class DashboardSidebarComponent implements OnInit {
  constructor(
    private pageTitleService: PageTitleService,
    private router: Router
  ) {}
  pages: object = {
    dashboard: $localize`Dashboard`,
    courses: $localize`Courses`,
    'my-lessons': $localize`My Lessons`,
    schedule: $localize`Schedule`,
    students: $localize`Students`,
    resource: $localize`Resource`,
    transaction: $localize`Transaction`,
    'live-class': $localize`Live Class`,
    instructors: $localize`Instructors`,
    profile: $localize`Profile`,
    message: $localize`Message`,
    wallet: $localize`Wallet`,
  };

  changePageTitle(title: string = '') {
    this.pageTitleService.changeTitle(title);
  }

  ngOnInit(): void {
    this.changePageTitle(this.pages[this.router.url.split(/[\/\?]/)[2]]);
  }
}
