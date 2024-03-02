import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { CalculateAgePipe } from './calculate-age.pipe';
import { UpperCaseDirective } from './upper-case.directive';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { ValidationErrorsPipe } from './validation-errors.pipe'; // Import MatCardModule
import { FullNameEnrollmentPipe } from './full-name-enrollment.pipe';

@NgModule({
  declarations: [
    FullNamePipe,
    CalculateAgePipe,
    UpperCaseDirective,
    ValidationErrorsPipe,
    FullNameEnrollmentPipe,
  ],
  imports: [CommonModule, MatCardModule], // Add MatCardModule to imports array
  exports: [
    FullNamePipe,
    CalculateAgePipe,
    UpperCaseDirective,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    ValidationErrorsPipe,
    FullNameEnrollmentPipe,
  ],
})
export class SharedModule {}
