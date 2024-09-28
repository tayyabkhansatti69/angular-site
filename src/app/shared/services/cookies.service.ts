import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CookiesService {
  constructor() {}

  // add
  public setCookie(
    cname: string,
    cvalue: string,
    exdays: number,
    path: string = '/'
  ) {
    const date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `${cname}=${cvalue}; expires=${expires}; path=${path}`;
  }

  // get
  public getCookie(cname: string) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim().split('=');
      if (cookie[0] == cname) return cookie[1];
    }
    return null;
  }

  // delete
  deleteCookie(name: string, path: string = '/'): void {
    // Set the cookie's expiration date to a past date to delete it
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path}`;
  }
}
