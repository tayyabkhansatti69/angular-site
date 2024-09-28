import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookiesService } from './cookies.service';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private cookies: CookiesService) {}

  private hostUrl = environment.hostUrl;

  getData(endpoint: string, token: string = null): Observable<any> {
    let headers = {};

    if (token) {
      headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
    }

    return this.http.get<any>(`${this.hostUrl}/${endpoint}`, { headers });
  }

  addData(
    endpoint: string,
    data: object,
    token: string = null
  ): Observable<any> {
    let headers = {};

    if (token) {
      headers = new HttpHeaders({
        Authorization: `Bearer ${token}`,
      });
    }

    return this.http.post<any>(`${this.hostUrl}/${endpoint}`, data, {
      headers,
    });
  }

  updateData(endpoint: string, data: object): Observable<any> {
    return this.http.put<any>(`${this.hostUrl}/${endpoint}`, data);
  }

  deleteData(endpoint: string): Observable<any> {
    return this.http.delete<any>(`${this.hostUrl}/${endpoint}`);
  }

  logout(): Observable<any> {
    const token = this.cookies.getCookie('access_token');
    const role = this.cookies.getCookie('user_role');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    const body = { logout: true };

    if (role === 'student') {
      const url = `${this.hostUrl}/api/logoutStudent`;
      return this.http.put<any>(url, body, { headers });
    } else {
      const url = `${this.hostUrl}/api/${role}/logout`;
      return this.http.post<any>(url, body, { headers });
    }
  }
}
