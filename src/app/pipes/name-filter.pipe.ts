import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: Array<any>, wk?: string): Array<any> {
    let arr = [];

    for(let i = 0 ; i< value.length ; i++){
      // value[i].name  
      if(value[i].name.indexOf(wk)!=-1){
        arr.push(value[i]);
      }
    }

    return arr;
  }

}
