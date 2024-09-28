import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'returnArray',
  standalone: true,
})
export class ReturnArrayPipe implements PipeTransform {
  transform(value) {
    let arr = [];
    for (let i = 0; i < +value; i++) {
      arr.push(i);
    }
    return arr;
  }
}
