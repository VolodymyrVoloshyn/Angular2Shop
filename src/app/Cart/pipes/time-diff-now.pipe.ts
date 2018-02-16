import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDiffNow'
})
export class TimeDiffNowPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value instanceof Date && !isNaN(value.valueOf())) {
      const timeDiff = Math.abs(value.valueOf() - (new Date()).valueOf());

      if (timeDiff < 60000) {
        if (timeDiff < 1000) {
          return '1 sec';
        }
        return Math.floor(timeDiff / 1000) + ' sec';
      } else {
        return Math.floor(timeDiff / 60000) + ' min';
      }
    }
  }

}
