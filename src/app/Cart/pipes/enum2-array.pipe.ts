import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum2Array'
})
export class Enum2ArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let res = [];

    for (let item in value) {
      res.push({ key: item, name: value[item] });
    }
    
    return res;
  }

}
