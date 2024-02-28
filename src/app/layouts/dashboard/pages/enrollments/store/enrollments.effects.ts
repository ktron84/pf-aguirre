import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentsActions } from './enrollments.actions';
import { EnrollmentsService } from '../enrollments.service';

@Injectable()
export class EnrollmentsEffects {
  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(EnrollmentsActions.loadEnrollments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.enrollmentService.getEnrollments().pipe(
          map((data) => EnrollmentsActions.loadEnrollmentsSuccess({ data })),
          catchError((error) =>
            of(EnrollmentsActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private enrollmentService: EnrollmentsService
  ) {}
}
