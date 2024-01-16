import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,MatTableModule,SharedModule
  ],
  exports:[
    StudentsComponent,
  ]
})
export class StudentsModule { }
