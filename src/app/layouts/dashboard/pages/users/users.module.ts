import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from '../../../../shared/shared.module';
import { UsersService } from '../../../../core/services/users.service';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersComponent, UserDialogComponent],
  imports: [CommonModule, SharedModule, UsersRoutingModule],
  exports: [UsersComponent],
  providers: [UsersService],
})
export class UsersModule {}
