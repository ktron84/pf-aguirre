import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsComponent } from './enrollments.component';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentsEffects } from './store/enrollments.effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [EnrollmentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule,
    StoreModule.forFeature('enrollments', {}),
    EffectsModule.forFeature([EnrollmentsEffects]),
  ],
})
export class EnrollmentsModule {}
