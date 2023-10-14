import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'billStatus'
})
export class BillStatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value? 'Paid' : 'Pending';
  }

}
