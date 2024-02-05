import { Injectable, Inject } from '@angular/core';
import { Student } from '../../layouts/dashboard/pages/students/models';
import { delay, of } from 'rxjs';

const STUDENTS_DB: Student[] = [ 
  {
    id: "be46de05-274e-4313-a79a-7ecbac11bbad",
    firstName: 'Carlos',
    lastName: 'Aguirre',
    birthDate: '1984-01-07',
    email: 'ceaguirre@gmail.com',
    cellPhone: '3001238596',
    country: 'Colombia',
  },
  {
    id: "31c32a47-1e39-4f9e-9105-a0aca00dde3c",
    firstName: 'Juan',
    lastName: 'Aguirre',
    birthDate: '2008-07-16',
    email: 'jjaguirre@gmail.com',
    cellPhone: '3001238596',
    country: 'Argentina',
  },
  {
    id: "b5952229-3874-4b1b-a693-2a650ca738ef",
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
    return of (STUDENTS_DB).pipe(delay(3000));
  }
}