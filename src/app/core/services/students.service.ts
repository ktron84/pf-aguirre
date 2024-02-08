import { Injectable, Inject } from '@angular/core';
import { Student } from '../../layouts/dashboard/pages/students/models';
import { delay, of } from 'rxjs';

const STUDENTS_DB: Student[] = [ 
  {
    id: 123,
    firstName: 'Carlos',
    lastName: 'Aguirre',
    birthDate: '1984-01-07',
    email: 'ceaguirre@gmail.com',
    cellPhone: '3001238596',
    country: 'Colombia',
  },
  {
    id: 456,
    firstName: 'Juan',
    lastName: 'Aguirre',
    birthDate: '2008-07-16',
    email: 'jjaguirre@gmail.com',
    cellPhone: '3001238596',
    country: 'Argentina',
  },
  {
    id: 789,
    firstName: 'Maria',
    lastName: 'Durango',
    birthDate: '1988-05-21',
    email: 'midurango@gmail.com',
    cellPhone: '3001238596',
    country: 'Brasil',
  },
];


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(@Inject('USER_TOKEN') userToken: string) { 
    console.log('El servicio ha sido instanciado', userToken);
  }

  gestStudents() {
    return of (STUDENTS_DB).pipe(delay(2000));
  }
}