import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keysArray',
  standalone: true,
})
export class KeysArrayPipe implements PipeTransform {
  transform(value: object = {}) {
    return Object.keys(value);
  }
}
