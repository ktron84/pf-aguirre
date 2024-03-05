import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsComponent } from './enrollments.component';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentsEffects } from './store/enrollments.effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../../../shared/shared.module';
import { EnrollmentsService } from './enrollments.service';
import { enrollmentsFeature } from './store/enrollments.reducer';
import { EnrollmentDialogComponent } from './components/enrollment-dialog/enrollment-dialog.component';

@NgModule({
  declarations: [EnrollmentsComponent, EnrollmentDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule,
    StoreModule.forFeature(enrollmentsFeature),
    EffectsModule.forFeature([EnrollmentsEffects]),
  ],
  providers: [EnrollmentsService],
})
export class EnrollmentsModule {}
