import { Component, EventEmitter, Input, Output,OnChanges, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../../../../core/services/courses.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { Course } from './models/index';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
  displayedColumns: string[] = ['id', 'courseName', 'description', 'startDate', 'endDate', 'actions'];

  courses: Course[] = [];

  constructor(private _snackBar:MatSnackBar, 
    private coursesService: CoursesService, 
    private LoadingService: LoadingService,
    public dialog: MatDialog
  ) {
    this.LoadingService.setIsLoading(true);
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      complete: () => {
        this.LoadingService.setIsLoading(false);
      },
    });    
  }

  onCreateCourse(): void{
    this.dialog.open(CourseDialogComponent).
    afterClosed().
    subscribe({
      next:(result) => {
        if(result){
          this.LoadingService.setIsLoading(true);
          this.coursesService.createCourse(result).subscribe({
            next: (courses) => {
              this.courses = courses;
              this._snackBar.open('Curso creado correctamente', 'cerrar', {
                duration: 2000,
              });
            },
            complete: () => {
              this.LoadingService.setIsLoading(false);
            },
          });
        }
      }
    }); 
  }

  onEditCourse(course: Course){
    this.dialog.open(CourseDialogComponent, {
      data: course,
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.LoadingService.setIsLoading(true);
          this.coursesService.updateCourseById(course.id, result).subscribe({
            next: (courses) => {
              this.courses = courses;
              this._snackBar.open('Curso actualizado correctamente', 'cerrar', {
                duration: 2000,
              });
            },
            complete: () => {
              this.LoadingService.setIsLoading(false);
            },
          });
        
        };
      }  
    }); 
  }

  onDeleteCourse(id: number) {
    this.LoadingService.setIsLoading(true);
    this.coursesService.deleteCourseById(id).subscribe({
      next: (courses) => {
        this.courses = courses;
        this._snackBar.open('Curso eliminado correctamente', 'cerrar', {
          duration: 2000,
        });
      },
      complete: () => {
        this.LoadingService.setIsLoading(false);
      },
    });
  }
}