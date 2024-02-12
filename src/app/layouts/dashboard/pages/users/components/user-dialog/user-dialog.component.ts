import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss',
})
export class UserDialogComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingUser?: User
  ) {
    this.userForm = this.fb.group({
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      email: this.fb.control(''),
      cellPhone: this.fb.control(''),
      password: this.fb.control(''),
      role: this.fb.control(''),
    });

    if (editingUser) {
      this.userForm.patchValue(editingUser);
    }
  }

  onSaveUser(): void {
    this.dialogRef.close(this.userForm.value);
  }
}
