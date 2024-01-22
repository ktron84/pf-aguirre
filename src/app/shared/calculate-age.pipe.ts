import { Pipe, PipeTransform } from '@angular/core';
import { student } from '../layouts/dashboard/pages/students/models';

@Pipe({
  name: 'calculateAge'
})
export class CalculateAgePipe implements PipeTransform {

  transform(value: student, ...args: unknown[]): unknown {
    
    //console.log("date:" + value);

    function calculateAge(dateString: string): number {
      const [year, month, day] = dateString.split('-');
      const birthDate = new Date(`${year}-${month}-${day}`);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDifference = today.getMonth() - birthDate.getMonth();
      if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1;
      }
      
      return age;
      
    }

    const fechaNacimiento = value.birthDate;
    //console.log("date:" + value.birthDate);
    const edad = calculateAge(fechaNacimiento);
      
    return edad ;
  }

}
