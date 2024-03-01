import { Pipe, PipeTransform } from '@angular/core';
import { Enrollment } from '../layouts/dashboard/pages/enrollments/models';

@Pipe({
  name: 'fullNameEnrollment',
})
export class FullNameEnrollmentPipe implements PipeTransform {
  transform(value: Enrollment, ...args: unknown[]): unknown {
    console.log(value);
    return value.student?.firstName + ' ' + value.student?.lastName;
  }
}
