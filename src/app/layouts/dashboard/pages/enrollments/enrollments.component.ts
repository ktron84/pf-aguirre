import { Component } from '@angular/core';
import { EnrollmentsService } from './enrollments.service';
import { Store } from '@ngrx/store';
import { EnrollmentsActions } from './store/enrollments.actions';
import { Enrollment } from './models/index';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrl: './enrollments.component.scss',
})
export class EnrollmentsComponent {
  //enrollments$: any;

  displayedColumns: string[] = ['id', 'courseName', 'firstName', 'actions'];

  enrollments: Enrollment[] = [];

  constructor(
    private enrollmentsService: EnrollmentsService,
    private store: Store
  ) {
    this.enrollmentsService.getEnrollments().subscribe((enrollments) => {
      this.enrollments = enrollments;
    });

    this.store.dispatch(EnrollmentsActions.loadEnrollments());
  }
}
