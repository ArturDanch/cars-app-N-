import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (value.length > arg) {
      return `${value.slice(0, arg)} ...`;
    }
    return value;
  }

}
