import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentFormComponent } from './components/student-form/student-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentsService } from '../../../../core/services/students.service';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,

  ],
  exports:[
    StudentsComponent,
  ],
  providers:[StudentsService,
    {
      provide:'USER_TOKEN',
      useValue: 'fdofjdsfgdsiweopgjdvjdklfjdslkfdkfjdkl',
    },
  
  
  ],
})
export class StudentsModule { }
