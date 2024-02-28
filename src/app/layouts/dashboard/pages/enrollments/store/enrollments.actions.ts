import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const EnrollmentsActions = createActionGroup({
  source: 'Enrollments',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: unknown }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
  },
});
