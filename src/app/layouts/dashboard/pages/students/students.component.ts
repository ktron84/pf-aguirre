import { Component } from '@angular/core';
import { student } from './models/index';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent {  
  
  displayedColumns: string[] = ['uuid','fullName', 'age', 'email', 'country'];
  dataSource: student[] =[
    {
      uuid: "be46de05-274e-4313-a79a-7ecbac11bbad",
      firstName: 'Carlos',
      lastName: 'Aguirre',
      birthDate: '01/07/1984',
      email: 'ktron@outlook.com',
      country: 'Colombia',
      countryPhoto: 'https://flagdownload.com/wp-content/uploads/Flag_of_Colombia-64x43.png'
    },
    {
      uuid: "31c32a47-1e39-4f9e-9105-a0aca00dde3c",
      firstName: 'Juan',
      lastName: 'Aguirre',
      birthDate: '07/16/2008',
      email: 'kidtron@gmail.com',
      country: 'Argentina',
      countryPhoto: 'https://flagdownload.com/wp-content/uploads/Flag_of_Argentina-128x80.png'
    },
    {
      uuid: "b5952229-3874-4b1b-a693-2a650ca738ef",
      firstName: 'Maria',
      lastName: 'Durango',
      birthDate: '05/21/1988',
      email: 'isamarylond@gmail.com',
      country: 'Brasil',
      countryPhoto: 'https://flagdownload.com/wp-content/uploads/Flag_of_Brazil-64x45.png'
    }
  ];

  onStudentSubmitted(ev: student): void{
    this.dataSource = [...this.dataSource, {...ev, uuid: crypto.randomUUID()}]
  }
}
