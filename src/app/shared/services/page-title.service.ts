import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  constructor() {}

  private def = '';
  private titleSource = new BehaviorSubject<string>(this.def);
  currentTitle = this.titleSource.asObservable();

  changeTitle(title: string) {
    this.titleSource.next(title);
  }
}
