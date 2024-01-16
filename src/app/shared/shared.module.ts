import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { CalculateAgePipe } from './calculate-age.pipe';



@NgModule({
  declarations: [
    FullNamePipe,
    CalculateAgePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,CalculateAgePipe
  ]
})
export class SharedModule { }
