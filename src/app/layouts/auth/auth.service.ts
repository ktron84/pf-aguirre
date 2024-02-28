import { Injectable } from '@angular/core';
import { User } from '../dashboard/pages/users/models';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, delay, map, finalize, tap, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

interface LoginData {
  email: null | string;
  password: null | string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  authUser: User | null = null;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private httpClient: HttpClient
  ) {}

  private setAuthUser(user: User): void {
    this.authUser = user;
    localStorage.setItem(
      'token',
      user.token ? user.token : Math.random().toString(36).substring(7)
    );
  }

  login(data: LoginData): void {
    this.httpClient
      .get<User[]>(
        `${environment.apiUrl}/users?email=${data.email}&password=${data.password}`
      )
      .subscribe({
        next: (response) => {
          if (response.length > 0) {
            this.setAuthUser(response[0]);
            this.router.navigate(['dashboard', 'home']);
          } else {
            this._snackBar.open('Usuario o contraseña incorrectos', 'cerrar', {
              duration: 2000,
            });
          }
        },
      });
  }

  logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken() {
    return this.httpClient
      .get<User[]>(
        `${environment.apiUrl}/users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((response) => {
          if (response.length > 0) {
            this.setAuthUser(response[0]);
            return true;
          } else {
            this.authUser = null;
            localStorage.removeItem('token');
            this._snackBar.open('Usuario sin token', 'cerrar', {
              duration: 2000,
            });
            return false;
          }
        }),
        catchError(() => of(false))
      );
  }
}
