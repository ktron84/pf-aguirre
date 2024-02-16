import { Injectable } from '@angular/core';
import { User } from '../dashboard/pages/users/models';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, delay, map, finalize, tap } from 'rxjs';
import { LoadingService } from '../../core/services/loading.service';

interface LoginData {
  email: null | string;
  password: null | string;
}

const MOCK_USER = {
  id: 1,
  firstName: 'donald',
  lastName: 'trump',
  email: 'donald@gmail.com',
  cellPhone: '123456789',
  password: '123456',
  role: 'Administrador',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  authUser: User | null = null;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private LoadingService: LoadingService
  ) {}

  private setAuthUser(mockUser: User): void {
    this.authUser = mockUser;
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRvbmFsZCBUcnVtcCIsImlhdCI6MTUxNjIzOTAyMn0.1Fr2YImlCO_MQKtXIiq0xmaaCNEs605Gly82oZYomJw'
    );
  }

  login(data: LoginData): void {
    if (
      data.email === MOCK_USER.email &&
      data.password === MOCK_USER.password
    ) {
      this.setAuthUser(MOCK_USER);
      this.router.navigate(['dashboard', 'home']);
    } else {
      this._snackBar.open('Usuario o contraseña incorrectos', 'cerrar', {
        duration: 2000,
      });
    }
  }

  logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken() {
    this.LoadingService.setIsLoading(true);
    return of(localStorage.getItem('token')).pipe(
      delay(1000),
      map((response) => !!response),
      tap(() => {
        this.setAuthUser(MOCK_USER);
      }),
      finalize(() => this.LoadingService.setIsLoading(false))
    );
  }
}
