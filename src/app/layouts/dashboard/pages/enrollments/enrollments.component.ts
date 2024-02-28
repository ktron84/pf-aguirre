import { Component } from '@angular/core';
import { EnrollmentsService } from './enrollments.service';
import { Store } from '@ngrx/store';
import { EnrollmentsActions } from './store/enrollments.actions';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss',
})
export class EnrollmentsComponent {
  enrollments$: any;

  constructor(
    private enrollmentsService: EnrollmentsService,
    private store: Store
  ) {
    this.enrollments$ = this.enrollmentsService.getEnrollments();

    this.store.dispatch(EnrollmentsActions.loadEnrollments());
  }
}
