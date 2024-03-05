import { Injectable, Inject } from '@angular/core';
import { Student } from '../../layouts/dashboard/pages/students/models';
import { delay, finalize, merge, mergeMap, of, Observable } from 'rxjs';
import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable()
export class StudentsService {
  constructor(
    private loadingService: LoadingService,
    private httpClient: HttpClient
  ) {}

  getStudents() {
    this.loadingService.setIsLoading(true);
    return this.httpClient
      .get<Student[]>(`${environment.apiUrl}/students`)
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  getAllStudents(): Observable<Student[]> {
    this.loadingService.setIsLoading(true);
    return this.httpClient
      .get<Student[]>(`${environment.apiUrl}/students`)
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  createStudent(payload: Student) {
    return this.httpClient
      .post<Student>(`${environment.apiUrl}/students`, payload)
      .pipe(mergeMap(() => this.getStudents()))
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  deleteStudentById(id: number) {
    return this.httpClient
      .delete<Student>(`${environment.apiUrl}/students/${id}`)
      .pipe(mergeMap(() => this.getStudents()))
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  updateStudentById(id: number, data: Student) {
    return this.httpClient
      .put<Student>(`${environment.apiUrl}/students/${id}`, data)
      .pipe(mergeMap(() => this.getStudents()))
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }
}
