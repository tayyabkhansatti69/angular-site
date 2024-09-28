import { Component, OnDestroy, OnInit } from '@angular/core';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { LangsFormComponent } from '../langs-form/langs-form.component';
import { CookiesService } from '../../services/cookies.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    NgFor,
    LangsFormComponent,
    CommonModule,
  ],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  constructor(
    private cookies: CookiesService,
    private http: HttpService,
    private router: Router
  ) {}

  logined: boolean = false;
  categories: string[];
  searchForm: FormGroup;

  // On Scrolling
  onScroll() {
    let he = document.querySelector('header');
    if (window.scrollY > 70) {
      he.classList.add('scrolled', 'shadow-sm');
    } else he.classList.remove('scrolled', 'shadow-sm');
  }

  // searching
  onSearch() {}

  onLogout() {
    this.http.logout().subscribe({
      next: () => {
        this.cookies.deleteCookie('access_token');
        this.cookies.deleteCookie('user_role');
        this.cookies.deleteCookie('user_id');
        this.logined = false;
        this.router.navigate(['']);
      },
    });
  }

  ngOnInit(): void {
    // Logined
    this.logined = this.cookies.getCookie('access_token') ? true : false;

    // search-form
    this.searchForm = new FormGroup({
      searchValue: new FormControl(null),
      category: new FormControl('all'),
    });

    // Windows Scrolled
    window.addEventListener('scroll', this.onScroll);
  }

  ngOnDestroy(): void {
    // Header not exist
    window.removeEventListener('scroll', this.onScroll);
  }
}
