import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { SharedModule } from '../../../../shared/shared.module';
import { CoursesService } from '../../../../core/services/courses.service';



@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    SharedModule
  ],
  exports:[
    CoursesComponent
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
