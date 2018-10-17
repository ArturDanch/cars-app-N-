import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value >= 1000 && value <= 999999) {
        value = `${value / 1000}K $`;
    } else if (value >= 1000000) {
      value = `${value / 1000000}M $`;
    }
    return value;
  }

}
