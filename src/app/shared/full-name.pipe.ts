import { Pipe, PipeTransform } from '@angular/core';
import { student } from '../layouts/dashboard/pages/students/models';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(value: student, ...args: unknown[]): unknown {
    return value.firstName +' '+ value.lastName;
  }
}