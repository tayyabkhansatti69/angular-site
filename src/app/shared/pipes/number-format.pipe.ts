import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true,
})
export class NumberFormatPipe implements PipeTransform {
  transform(value: number): string {
    return value >= 1000000
      ? (value / 1000000).toFixed(0) + 'M'
      : value >= 1000
      ? (value / 1000).toFixed(0) + 'K'
      : value.toString();
  }
}
