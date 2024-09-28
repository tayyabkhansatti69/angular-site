// auth.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private hostUrl = environment.hostUrl;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private user = new BehaviorSubject<any>(null);

  login(endpoint, body: any): Observable<any> {
    return this.http.post<any>(`${this.hostUrl}/api/${endpoint}`, body).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', response.user);
        localStorage.setItem('loginTime', new Date().toISOString()); // تخزين الوقت في localStorage

        this.user.next(response.user);
        this.loggedIn.next(true);
      })
    );
  }

  logout(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });

    const role = localStorage.getItem('user_role');
    const body = { logout: true };

    if (role === 'student') {
      const url = `${this.hostUrl}/api/logoutStudent`;
      return this.http.put<any>(url, body, { headers }).pipe(
        tap((response: any) => {
          localStorage.removeItem('token');
          this.loggedIn.next(false);
          this.user.next(null);
          this.router.navigate(['']);
        })
      );
    } else {
      const url = `${this.hostUrl}/api/${role}/logout`;
      return this.http.post<any>(url, body, { headers }).pipe(
        tap((response: any) => {
          localStorage.removeItem('token');
          this.loggedIn.next(false);
          this.user.next(null);
          this.router.navigate(['']);
        })
      );
    }
  }

  checkLoginStatus(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
    }
  }

  isLoggedIn(): boolean {
    this.checkLoginStatus();
    return this.loggedIn.getValue();
  }

  getUser(): any {
    this.user.next(JSON.parse(localStorage.getItem('user')));
    return this.user.getValue();
  }

  getUserRole(): string {
    return this.getUser()?.['Role'];
  }

  // Check Expiry
  checkExpiry() {
    const minutes: number = this.getUser()?.['exp'];
    const loginTime = localStorage.getItem('loginTime');
    if (loginTime) {
      const loginDate = new Date(loginTime);
      const currentTime = new Date();
      const elapsedTime = (currentTime.getTime() - loginDate.getTime()) / 60000; // الفرق بالدقائق
      if (elapsedTime >= minutes) {
        localStorage.removeItem('token');
      }
    }
  }
}
