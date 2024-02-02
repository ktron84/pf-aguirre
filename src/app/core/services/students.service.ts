import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(@Inject('USER_TOKEN') userToken: string) { 
    console.log('El servicio ha sido instanciado', userToken);
  }
}