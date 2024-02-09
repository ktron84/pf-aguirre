import { Component, EventEmitter, Input, Output,OnChanges, OnInit } from '@angular/core';
import { Student } from './models/index';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentsService } from '../../../../core/services/students.service';
import { LoadingService } from '../../../../core/services/loading.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})

export class StudentsComponent implements OnInit {  

  passEdit: any; 
  mostrar=false;
  studentAdd: Student | undefined;
  boton: any;  
  
  displayedColumns: string[] = ['id','fullName', 'age', 'email', 'cellPhone', 'country', 'action'];
  dataSource: Student[] =[];

  constructor(private _snackBar: MatSnackBar, private studentsService: StudentsService, private LoadingService: LoadingService) {}

  ngOnInit(): void {
    this.LoadingService.setIsLoading(true);
    this.studentsService.gestStudents().subscribe({
      next: (students) => {
      this.dataSource = students;
      },
      complete: () => {
        this.LoadingService.setIsLoading(false);
      }      
    });
  }

  onStudentSubmitted(ev: Student): void{
    if(ev.id===undefined){
      console.log(ev.id);
      this.dataSource = [...this.dataSource, {...ev, 
        id:  Math.floor(Math.random() * 900) + 100
      }];
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

  deleteStudent(id: number): Student[] {
    console.log(this.dataSource)
    const dataSourceFiltered = this.dataSource.filter(el   => el.id != id);
    this.dataSource = [...dataSourceFiltered];
    return this.dataSource
  }

  onStudentDelete(id: number): void {
    this.deleteStudent(id);
    this.updateList()
    this.mostrarAlerta("Alumno fue eliminado con exito","cerrar");
  }

  updateStudent(students: Student) {
    const index = this.dataSource.findIndex(el => el.id == students.id)     
    this.dataSource[index] = students;      
    return this.dataSource
  }

  onPressStudentEdit(students:Student) {
    console.log(JSON.stringify(students));
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





