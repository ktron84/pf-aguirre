import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { Course } from "../../layouts/dashboard/pages/courses/models";

let COURSES_DB: Course[] = [
  {
    id: 1,
    courseName: 'Angular',
    description: 'Curso de Angular 17',
    startDate: '2024-01-31',
    endDate: '2024-12-31'
  },
  {
    id: 2,
    courseName: 'React',
    description: 'Curso de React 18',
    startDate: '2024-01-31',
    endDate: '2024-12-31'
  },
  {
    id: 3,
    courseName: 'Vue',
    description: 'Curso de Vue 3',
    startDate: '2024-01-31',
    endDate: '2024-12-31'
  },
];


@Injectable()

export class CoursesService {

   getCourses() {
     return of (COURSES_DB).pipe(delay(2000));
   }


   deleteCourseById(id: number){
      COURSES_DB = COURSES_DB.filter((el)=> el.id !== id);
      return of(true).pipe(delay(1000));
   }
}