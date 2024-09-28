import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextOperationsService {
  constructor() {}

  copy(text: any, thenF = () => {}, catchF = () => {}) {
    navigator.clipboard.writeText(text).then(thenF).catch(catchF);
  }
}
