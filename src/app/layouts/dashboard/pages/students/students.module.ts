import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentsService } from '../../../../core/services/students.service';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentDialogComponent } from './components/student-dialog/student-dialog.component';

@NgModule({
  declarations: [StudentsComponent, StudentDialogComponent],
  imports: [CommonModule, SharedModule, StudentsRoutingModule],
  exports: [StudentsComponent],
  providers: [StudentsService],
})
export class StudentsModule {}
