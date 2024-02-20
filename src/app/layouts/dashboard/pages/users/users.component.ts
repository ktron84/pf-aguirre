import { Component } from '@angular/core';
import { User } from './models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../../../core/services/users.service';
import { LoadingService } from '../../../../core/services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'cellPhone',
    'password',
    'role',
    'actions',
  ];

  users: User[] = [];

  constructor(
    private _snackBar: MatSnackBar,
    private usersService: UsersService,
    private loadingService: LoadingService,
    public dialog: MatDialog
  ) {
    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
      error: () => {
        this._snackBar.open('Error al cargar los usuarios', 'cerrar', {
          duration: 2000,
        });
      },
    });
  }

  onCreateUser(): void {
    const token = uuidv4(); // Generate a random token using UUID
    this.dialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            result.token = token; // Add the token to the result object
            this.usersService.createUser(result).subscribe({
              next: (users) => {
                this.users = users;
                this._snackBar.open('Usuario creado correctamente', 'cerrar', {
                  duration: 2000,
                });
              },
            });
          }
        },
      });
  }

  onEditUser(user: User) {
    this.dialog
      .open(UserDialogComponent, {
        data: user,
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.usersService.updateUserById(user.id, result).subscribe({
              next: (users) => {
                this.users = users;
                this._snackBar.open(
                  'Usuario actualizado correctamente',
                  'cerrar',
                  {
                    duration: 2000,
                  }
                );
              },
            });
          }
        },
      });
  }

  onDeleteUser(id: number) {
    this.usersService.deleteUsersById(id).subscribe({
      next: (users) => {
        this.users = users;
        this._snackBar.open('Usuario eliminado correctamente', 'cerrar', {
          duration: 2000,
        });
      },
      error: () => {
        this._snackBar.open('Error al eliminar el usuario', 'cerrar', {
          duration: 2000,
        });
      },
    });
  }
}
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
