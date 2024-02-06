import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { Course } from "../../layouts/dashboard/pages/courses/models";

let courses: Course[] = [
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
     return of (courses).pipe(delay(1200));
   }


   deleteCourseById(id: number){
      courses = courses.filter((el)=> el.id !== id);
      return this.getCourses();
   }
}