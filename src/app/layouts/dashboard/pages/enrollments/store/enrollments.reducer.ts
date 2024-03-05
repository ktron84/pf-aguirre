import { createFeature, createReducer, on } from '@ngrx/store';
import { EnrollmentsActions } from './enrollments.actions';
import { Enrollment } from '../models';
import { state } from '@angular/animations';
import { Student } from '../../students/models';
import { Course } from '../../courses/models';

export const enrollmentsFeatureKey = 'enrollments';

export interface State {
  enrollments: Enrollment[];
  students: Student[];
  courses: Course[];
  loading: boolean;
  error: unknown;
  loadingStudents: boolean;
  errorStudents: unknown;
  loadingCourses: boolean;
  errorCourses: unknown;
}

export const initialState: State = {
  enrollments: [],
  students: [],
  courses: [],
  loading: false,
  error: null,
  loadingStudents: false,
  errorStudents: null,
  loadingCourses: false,
  errorCourses: null,
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
  })),
  //
  on(EnrollmentsActions.loadStudents, (state) => ({
    ...state,
    loadingStudents: true,
  })),
  on(EnrollmentsActions.loadStudentsSuccess, (state, action) => ({
    ...state,
    loadingStudents: false,
    students: action.data,
  })),
  on(EnrollmentsActions.loadStudentsFailure, (state, action) => ({
    ...state,
    loadingStudents: true,
    errorStudents: action.error,
  })),
  //
  on(EnrollmentsActions.loadCourses, (state) => ({
    ...state,
    loadingCourses: true,
  })),
  on(EnrollmentsActions.loadCoursesSuccess, (state, action) => ({
    ...state,
    loadingCourses: false,
    courses: action.data,
  })),
  on(EnrollmentsActions.loadCoursesFailure, (state, action) => ({
    ...state,
    loadingCourses: true,
    errorCourses: action.error,
  }))
);

export const enrollmentsFeature = createFeature({
  name: enrollmentsFeatureKey,
  reducer,
});
