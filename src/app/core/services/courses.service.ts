import { Injectable } from '@angular/core';
import { Observable, delay, finalize, mergeMap, of } from 'rxjs';
import { Course } from '../../layouts/dashboard/pages/courses/models';
import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class CoursesService {
  constructor(
    private loadingService: LoadingService,
    private httpClient: HttpClient
  ) {}

  getCourses() {
    this.loadingService.setIsLoading(true);
    return this.httpClient
      .get<Course[]>(`${environment.apiUrl}/courses`)
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  getAllCourses(): Observable<Course[]> {
    this.loadingService.setIsLoading(true);
    return this.httpClient
      .get<Course[]>(`${environment.apiUrl}/courses`)
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  createCourse(data: Course) {
    return this.httpClient
      .post<Course>(`${environment.apiUrl}/courses`, data)
      .pipe(mergeMap(() => this.getCourses()))
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  deleteCourseById(id: number) {
    return this.httpClient
      .delete<Course>(`${environment.apiUrl}/courses/${id}`)
      .pipe(mergeMap(() => this.getCourses()))
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  updateCourseById(id: number, data: Course) {
    return this.httpClient
      .put<Course>(`${environment.apiUrl}/courses/${id}`, data)
      .pipe(mergeMap(() => this.getCourses()))
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }
}
