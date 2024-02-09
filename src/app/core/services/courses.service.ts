import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";
import { Course } from "../../layouts/dashboard/pages/courses/models";

let courses: Course[] = [
  {
    id: 1,
    courseName: 'Angular',
    description: 'Curso de Angular 17',
    startDate: new Date(),
    endDate: new Date(), 
  },
  {
    id: 2,
    courseName: 'React',
    description: 'Curso de React 18',
    startDate: new Date(),
    endDate: new Date()
  },
  {
    id: 3,
    courseName: 'Vue',
    description: 'Curso de Vue 3',
    startDate: new Date(),
    endDate: new Date()
  },
];


@Injectable()

export class CoursesService {

   getCourses() {
     return of (courses).pipe(delay(400));
   }

   createCourse(data: Course){
      courses = [...courses, { ...data, id: courses.length + 1, }];
      return this.getCourses();

   }


   deleteCourseById(id: number){
      courses = courses.filter((el)=> el.id !== id);
      return this.getCourses();
   }

   updateCourseById(id: number, data: Course) {
    courses = courses.map((el) => el.id === id ? { ...el, ...data } : el);
    return this.getCourses();
  }   
}