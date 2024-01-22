import { Component } from '@angular/core';
import { student } from './models/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent {  
  
  displayedColumns: string[] = ['uuid','fullName', 'age', 'email', 'course', 'country', 'action'];
  dataSource: student[] =[
    {
      uuid: "be46de05-274e-4313-a79a-7ecbac11bbad",
      firstName: 'Carlos',
      lastName: 'Aguirre',
      birthDate: '1984-01-07',
      email: 'ceaguirre@gmail.com',
      course: 'Angular',
      country: 'Colombia',
    },
    {
      uuid: "31c32a47-1e39-4f9e-9105-a0aca00dde3c",
      firstName: 'Juan',
      lastName: 'Aguirre',
      birthDate: '2008-07-16',
      email: 'jjaguirre@gmail.com',
      course: 'React',
      country: 'Argentina',
    },
    {
      uuid: "b5952229-3874-4b1b-a693-2a650ca738ef",
      firstName: 'Maria',
      lastName: 'Durango',
      birthDate: '1988-05-21',
      email: 'midurango@gmail.com',
      course: 'Astro',
      country: 'Brasil',
    }
  ];

  editingStudent: student | null = null;
  studentForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.studentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      course: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required]
    });
  };

  onStudentModify(student : student) {
    this.editingStudent = student;
    this.studentForm.setValue({
      firstName: student.firstName,
      lastName: student.lastName,
      birthDate: student.birthDate,
      course: student.course,
      email: student.email,
      country: student.country,
    })
  }

  onCancelEdit() {
    this.editingStudent = null;
    this.studentForm.reset();
  };

  onSaveEdit() {
    if (this.editingStudent && this.studentForm.valid) {
      this.dataSource = this.dataSource.map(student => 
        student.uuid === this.editingStudent!.uuid ? { ...this.editingStudent, ...this.studentForm.value } : student
      )   
      this.editingStudent = null;
      this.studentForm.reset();
    }
   }
  
  onStudentSubmitted(ev: student): void{
    this.dataSource = [...this.dataSource, {...ev, uuid: crypto.randomUUID()}]
  }

  onStudentDelete(student: student) {
    const confirmDelete = confirm('¿Confirma que desea eliminar el estudiante: ' + student.firstName + ' ' +student.lastName  +' ?' );
    if (confirmDelete) {
      this.dataSource = this.dataSource.filter(u => u.uuid !== student.uuid);
    }
  }
};





