import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentsActions } from './enrollments.actions';

export const enrollmentsFeatureKey = 'enrollments';

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(EnrollmentsActions.loadEnrollments, (state) => state),
  on(EnrollmentsActions.loadEnrollmentsSuccess, (state, action) => state),
  on(EnrollmentsActions.loadEnrollmentsFailure, (state, action) => state)
);

export const enrollmentsFeature = createFeature({
  name: enrollmentsFeatureKey,
  reducer,
});
