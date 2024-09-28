import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CookiesService } from '../../shared/services/cookies.service';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent implements OnInit {
  constructor(private cookies: CookiesService, private router: Router) {}

  ngOnInit(): void {
    if (this.cookies.getCookie('user_role')) this.router.navigate(['/']);
  }
}
