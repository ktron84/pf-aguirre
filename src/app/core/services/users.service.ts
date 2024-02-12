import { Injectable } from '@angular/core';
import { delay, finalize, of } from 'rxjs';
import { User } from '../../layouts/dashboard/pages/users/models';
import { LoadingService } from './loading.service';

let users: User[] = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'doe',
    email: 'johndoe@gmail.com',
    cellPhone: '123456789',
    password: '123456',
    role: 'Administrador',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'doe',
    email: 'janedoe@gmail.com',
    cellPhone: '123456789',
    password: '123456',
    role: 'Usuario',
  },
];

@Injectable()
export class UsersService {
  constructor(private loadingService: LoadingService) {}

  getUsers() {
    this.loadingService.setIsLoading(true);
    return of(users).pipe(
      delay(400),
      finalize(() => this.loadingService.setIsLoading(false))
    );
  }

  createUser(data: User) {
    users = [...users, { ...data, id: users.length + 1 }];
    return this.getUsers();
  }

  deleteUsersById(id: number) {
    users = users.filter((el) => el.id !== id);
    return this.getUsers();
  }

  updateUserById(id: number, data: User) {
    users = users.map((el) => (el.id === id ? { ...el, ...data } : el));
    return this.getUsers();
  }
}
