import { Component, OnInit } from '@angular/core';
import { LangsFormComponent } from '../../../shared/components/langs-form/langs-form.component';
import { AuthService } from '../../services/auth.service';
import { PageTitleService } from '../../services/page-title.service';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [LangsFormComponent],
  templateUrl: './dashboard-header.component.html',
})
export class DashboardHeaderComponent implements OnInit {
  constructor(
    private pageTitleService: PageTitleService,
    private auth: AuthService
  ) {}

  pageTitle: string;
  user: object;

  onLogout() {
    this.auth.logout();
  }

  ngOnInit(): void {
    this.pageTitleService.currentTitle.subscribe((title) => {
      this.pageTitle = title;
    });
    // get user data
    this.user = this.auth.getUser();
  }
}
