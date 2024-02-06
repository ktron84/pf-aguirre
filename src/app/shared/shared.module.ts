import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { CalculateAgePipe } from './calculate-age.pipe';
import { UpperCaseDirective } from './upper-case.directive';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    FullNamePipe,
    CalculateAgePipe,
    UpperCaseDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullNamePipe,CalculateAgePipe,UpperCaseDirective,MatTableModule,MatIconModule
  ]
})
export class SharedModule { }
