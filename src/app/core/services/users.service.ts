import { Injectable } from '@angular/core';
import { delay, finalize, merge, mergeMap, of } from 'rxjs';
import { User } from '../../layouts/dashboard/pages/users/models';
import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

//let users: User[] = [];

@Injectable()
export class UsersService {
  constructor(
    private loadingService: LoadingService,
    private httpClient: HttpClient
  ) {}

  getUsers() {
    this.loadingService.setIsLoading(true);
    return this.httpClient
      .get<User[]>(environment.apiUrl + '/users')
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  createUser(data: User) {
    return this.httpClient
      .post<User>(environment.apiUrl + '/users', data)
      .pipe(mergeMap(() => this.getUsers()))
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  deleteUsersById(id: number) {
    return this.httpClient
      .delete<User>(environment.apiUrl + '/users/' + id)
      .pipe(mergeMap(() => this.getUsers()))
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }

  updateUserById(id: number, data: User) {
    return this.httpClient
      .put<User>(environment.apiUrl + '/users/' + id, data)
      .pipe(mergeMap(() => this.getUsers()))
      .pipe(finalize(() => this.loadingService.setIsLoading(false)));
  }
}
