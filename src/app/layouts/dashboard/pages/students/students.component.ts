import { Component } from '@angular/core';
import { student } from './models/index';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent {  
  
  displayedColumns: string[] = ['id','fullName', 'age', 'email', 'country'];
  dataSource: student[] =[
    {
      id: 1,
      studentPhoto: 'https://github.com/ktron84.png',
      firstName: 'Carlos',
      lastName: 'Aguirre',
      birthDate: '01/07/1984',
      email: 'ktron@outlook.com',
      country: 'Colombia',
      countryPhoto: 'https://flagdownload.com/wp-content/uploads/Flag_of_Colombia-64x43.png'
    },
    {
      id: 2,
      studentPhoto: 'https://github.com/kidtron.png',
      firstName: 'Juan',
      lastName: 'Aguirre',
      birthDate: '07/16/2008',
      email: 'kidtron@gmail.com',
      country: 'Argentina',
      countryPhoto: 'https://flagdownload.com/wp-content/uploads/Flag_of_Argentina-128x80.png'
    },
    {
      id: 3,
      studentPhoto: 'https://github.com/Hyuuh.png',
      firstName: 'Maria',
      lastName: 'Durango',
      birthDate: '05/21/1988',
      email: 'isamarylond@gmail.com',
      country: 'Brasil',
      countryPhoto: 'https://flagdownload.com/wp-content/uploads/Flag_of_Brazil-64x45.png'
    }
  ];
}
