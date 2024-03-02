import { Component, OnDestroy } from '@angular/core';
import { EnrollmentsService } from './enrollments.service';
import { Store } from '@ngrx/store';
import { EnrollmentsActions } from './store/enrollments.actions';
import { Enrollment } from './models/index';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import {
  selectEnrollments,
  selectEnrollmentsIsLoading,
} from './store/enrollments.selectors';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss',
})
export class EnrollmentsComponent implements OnDestroy {
  //enrollments$: Observable<Enrollment[]>;

  displayedColumns: string[] = ['id', 'courseName', 'firstName', 'actions'];

  enrollments: Enrollment[] = [];

  isLoading$: Observable<boolean>;

  enrollmentsSubscription?: Subscription;

  desctoyed$ = new Subject();

  constructor(private store: Store) {
    //this.enrollments$ = this.store.select(selectEnrollments);

    this.store
      .select(selectEnrollments)
      .pipe(takeUntil(this.desctoyed$))
      .subscribe({
        next: (enrollments) => {
          this.enrollments = enrollments;
        },
      });

    this.isLoading$ = this.store.select(selectEnrollmentsIsLoading);
    this.store.dispatch(EnrollmentsActions.loadEnrollments());
  }

  ngOnDestroy(): void {
    this.desctoyed$.next(true);
    this.desctoyed$.complete();
  }
}
