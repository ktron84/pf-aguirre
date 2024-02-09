import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models/index';


@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss'
})
export class CourseDialogComponent {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private dialoRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingCourse?: Course,
    ) {
      this.courseForm = this.fb.group({
        courseName: this.fb.control(''),
        description: this.fb.control(''),
        startDate: this.fb.control(''),
        endDate: this.fb.control(''),
    });
    
    if(editingCourse){
      this.courseForm.patchValue(editingCourse);
    }
  }

  onSaveCourse(): void {
    this.dialoRef.close(this.courseForm.value);
  }
}
