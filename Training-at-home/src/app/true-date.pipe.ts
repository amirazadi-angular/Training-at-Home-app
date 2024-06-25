import { Pipe, PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'trueDate'
})
export class TrueDatePipe implements PipeTransform {

  transform(value: Date): string {
    const trueDate = moment(value).format('YYYY/MM/DD');
    return trueDate;
  }

}
