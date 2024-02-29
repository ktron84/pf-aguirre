import { Student } from '../../students/models';
import { Course } from '../../courses/models/index';

export interface Enrollment {
  id: string | number;
  studentdId: string | number;
  courseId: string | number;
  student?: Student;
  course?: Course;
}
