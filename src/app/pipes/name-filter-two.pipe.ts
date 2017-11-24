import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilterTwo'
})
export class NameFilterTwoPipe implements PipeTransform {

  transform(value: string, wk: string): boolean {
    return value.indexOf(wk) != -1;
  }

}
