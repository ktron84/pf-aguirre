import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../models';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss',
})
export class StudentDialogComponent {
  studentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<StudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingStudent?: Student
  ) {
    this.studentForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      birthDate: this.fb.control(''),
      email: this.fb.control(''),
      cellPhone: this.fb.control(''),
      country: this.fb.control(''),
    });

    if (editingStudent) {
      this.studentForm.patchValue(editingStudent);
    }
  }

  onSaveStudent(): void {
    this.dialogRef.close(this.studentForm.value);
  }
}
