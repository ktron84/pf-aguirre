import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentsActions } from './enrollments.actions';
import { Enrollment } from '../models';

export const enrollmentsFeatureKey = 'enrollments';

export interface State {
  enrollments: Enrollment[];
  loading: boolean;
  error: unknown;
}

export const initialState: State = {
  enrollments: [],
  loading: false,
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(EnrollmentsActions.loadEnrollments, (state) => ({
    ...state,
    loading: true,
  })),
  on(EnrollmentsActions.loadEnrollmentsSuccess, (state, action) => ({
    ...state,
    loading: false,
    enrollments: action.data,
  })),
  on(EnrollmentsActions.loadEnrollmentsFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error,
  }))
);

export const enrollmentsFeature = createFeature({
  name: enrollmentsFeatureKey,
  reducer,
});
