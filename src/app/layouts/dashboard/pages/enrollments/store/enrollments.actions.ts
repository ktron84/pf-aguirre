import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateEnrollmentData, Enrollment } from '../models';
import { Student } from '../../students/models';
import { Course } from '../../courses/models';

export const EnrollmentsActions = createActionGroup({
  source: 'Enrollments',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),

    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: Student[] }>(),
    'Load Students Failure': props<{ error: unknown }>(),

    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ data: Course[] }>(),
    'Load Courses Failure': props<{ error: unknown }>(),

    'Create Enrollment': props<{ data: CreateEnrollmentData }>(),
    'Create Enrollment Success': props<{ data: Enrollment }>(),
    'Create Enrollment Failure': props<{ error: unknown }>(),

    'delete Enrollment': props<{ id: string }>(),
    'delete Enrollment Success': props<{ data: Enrollment }>(),
    'delete Enrollment Failure': props<{ error: unknown }>(),
  },
});
