import { Component, EventEmitter, Input, Output,OnChanges, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from '../../../../core/services/courses.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { Course } from './models/index';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent {
  displayedColumns: string[] = ['id', 'courseName', 'description', 'startDate', 'endDate', 'actions'];

  courses: Course[] = [];

  constructor(private _snackBar:MatSnackBar, 
    private courseService: CoursesService, 
    private LoadingService: LoadingService 
  ) {
    this.LoadingService.setIsLoading(true);
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
      },
      complete: () => {
        this.LoadingService.setIsLoading(false);
      },
    });    
  }
  
  onDeleteCourse(id: number) {
    this.LoadingService.setIsLoading(true);
    this.courseService.deleteCourseById(id).subscribe({
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