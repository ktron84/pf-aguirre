import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentsActions } from '../../store/enrollments.actions';
import { Observable } from 'rxjs';
import { Student } from '../../../students/models/index';
import {
  selectEnrollmentsCourses,
  selectEnrollmentsStudents,
} from '../../store/enrollments.selectors';
import { Course } from '../../../courses/models';
import { Enrollment } from '../../models/index';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-enrollment-dialog',
  templateUrl: './enrollment-dialog.component.html',
  styleUrl: './enrollment-dialog.component.scss',
})
export class EnrollmentDialogComponent {
  students$: Observable<Student[]>;
  courses$: Observable<Course[]>;

  enrollmentForm: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<EnrollmentDialogComponent>
  ) {
    //
    this.enrollmentForm = formBuilder.group({
      courseId: this.formBuilder.control(''),
      studentId: this.formBuilder.control(''),
    });

    this.store.dispatch(EnrollmentsActions.loadStudents());
    this.students$ = this.store.select(selectEnrollmentsStudents);

    this.store.dispatch(EnrollmentsActions.loadCourses());
    this.courses$ = this.store.select(selectEnrollmentsCourses);
  }

  onsubmit(): void {
    if (this.enrollmentForm.invalid) {
      this.enrollmentForm.markAllAsTouched();
    } else {
      this.store.dispatch(
        EnrollmentsActions.createEnrollment({ data: this.enrollmentForm.value })
      );
      this.matDialogRef.close();
    }
  }
}
