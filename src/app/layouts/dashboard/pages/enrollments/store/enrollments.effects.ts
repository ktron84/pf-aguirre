import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentsActions } from './enrollments.actions';
import { EnrollmentsService } from '../enrollments.service';
import { StudentsService } from '../../../../../core/services/students.service';
import { CoursesService } from '../../../../../core/services/courses.service';

@Injectable()
export class EnrollmentsEffects {
  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.loadEnrollments),
      concatMap(() =>
        this.enrollmentsService.getEnrollments().pipe(
          //manejo de success
          map((data) => EnrollmentsActions.loadEnrollmentsSuccess({ data })),
          //manejo de error
          catchError((error) =>
            of(EnrollmentsActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.loadStudents),
      concatMap(() =>
        this.studentsService.getAllStudents().pipe(
          map((resp) => EnrollmentsActions.loadStudentsSuccess({ data: resp })),
          catchError((error) =>
            of(EnrollmentsActions.loadStudentsFailure({ error }))
          )
        )
      )
    );
  });

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.loadCourses),
      concatMap(() =>
        this.coursesService.getAllCourses().pipe(
          map((response) =>
            EnrollmentsActions.loadCoursesSuccess({ data: response })
          ),
          catchError((error) =>
            of(EnrollmentsActions.loadCoursesFailure({ error }))
          )
        )
      )
    );
  });

  createEnrollment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.createEnrollment),
      concatMap((action) =>
        this.enrollmentsService.createEnrollment(action.data).pipe(
          map((resp) =>
            EnrollmentsActions.createEnrollmentSuccess({ data: resp })
          ),
          catchError((error) =>
            of(EnrollmentsActions.createEnrollmentFailure({ error }))
          )
        )
      )
    );
  });

  createEnrollmentSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.createEnrollmentSuccess),
      map(() => EnrollmentsActions.loadEnrollments())
    );
  });

  deleteEnrollment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.deleteEnrollment),
      concatMap((action) =>
        this.enrollmentsService.deleteEnrollment(action.id).pipe(
          map((resp) =>
            EnrollmentsActions.deleteEnrollmentSuccess({ data: resp })
          ),
          catchError((error) =>
            of(EnrollmentsActions.deleteEnrollmentFailure({ error }))
          )
        )
      )
    );
  });

  deleteEnrollmentSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.deleteEnrollmentSuccess),
      map(() => EnrollmentsActions.loadEnrollments())
    );
  });

  constructor(
    private actions$: Actions,
    private enrollmentsService: EnrollmentsService,
    private studentsService: StudentsService,
    private coursesService: CoursesService
  ) {}
}
