import { Component, EventEmitter, Input, Output,OnChanges } from '@angular/core';
import { student } from './models/index';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentsService } from '../../../../core/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent {  

  passEdit: any; 
  mostrar=false;
  studentAdd: student | undefined;
  boton: any;  
  
  displayedColumns: string[] = ['id','fullName', 'age', 'email', 'cellPhone', 'country', 'action'];
  dataSource: student[] =[
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
    }
  ];

  constructor(private _snackBar: MatSnackBar, private studentsService: StudentsService) {}

  onStudentSubmitted(ev: student): void{
    if(ev.id===undefined){
      this.dataSource = [...this.dataSource, {...ev, 
        id: crypto.randomUUID()}];
        this.mostrar=false;
    }else{
      this.dataSource = this.updateStudent(ev);
      this.updateList();
      this.mostrar=false;
    }
  }

  onPressStudentAdd(){
    this.mostrar=true;
    this.passEdit=this.studentAdd;
    this.boton="Agregar";
  }

  updateList() {
    console.log("UPDATELIST")
    this.dataSource = [...this.getAllStudents()]
    
  }

  getAllStudents() {
    return this.dataSource
  }

  deleteStudent(id: number): student[] {
    console.log(this.dataSource)
    const dataSourceFiltered = this.dataSource.filter(el   => el.id != id.toString());
    this.dataSource = [...dataSourceFiltered];
    return this.dataSource
  }

  onStudentDelete(id: number): void {
    this.deleteStudent(id);
    this.updateList()
    this.mostrarAlerta("Alumno fue eliminado con exito","Bien!");
  }

  updateStudent(students: student) {
    const index = this.dataSource.findIndex(el => el.id == students.id)     
    this.dataSource[index] = students;      
    return this.dataSource
  }

  onPressStudentEdit(students:student) {
    this.passEdit = students;
    this.mostrar=true;      
    this.boton = 'Actualizar';      
  }

  recibirCancelar(can:boolean): void{    
    this.mostrar=false;
  }

  mostrarAlerta(msg: string, accion: string) {
    this._snackBar.open(msg, accion,{
      horizontalPosition:"center",
      verticalPosition:"top",
      duration: 3000
    });
  }
 
};





