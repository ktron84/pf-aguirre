import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment.development';
import { Enrollment } from './models';
import { CreateEnrollmentData } from './models/index';

@Injectable({ providedIn: 'root' })
export class EnrollmentsService {
  constructor(private http: HttpClient) {}

  getEnrollments() {
    return this.http.get<Enrollment[]>(
      `${environment.apiUrl}/enrollments?_embed=student&_embed=course`
    );
  }

  createEnrollment(data: CreateEnrollmentData) {
    return this.http.post<Enrollment>(
      `${environment.apiUrl}/enrollments`,
      data
    );
  }

  deleteEnrollment(id: string) {
    return this.http.delete<Enrollment>(
      `${environment.apiUrl}/enrollments/${id}`
    );
  }
}
