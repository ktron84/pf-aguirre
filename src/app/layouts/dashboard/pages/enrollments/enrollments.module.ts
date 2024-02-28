import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsComponent } from './enrollments.component';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentsEffects } from './store/enrollments.effects';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [EnrollmentsComponent],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    StoreModule.forFeature('enrollments', {}),
    EffectsModule.forFeature([EnrollmentsEffects]),
  ],
})
export class EnrollmentsModule {}
