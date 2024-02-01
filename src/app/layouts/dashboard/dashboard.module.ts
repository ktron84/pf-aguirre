import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { StudentsModule } from './pages/students/students.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StudentsComponent } from './pages/students/students.component';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    StudentsModule,
    MatListModule,
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },{
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ])
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
