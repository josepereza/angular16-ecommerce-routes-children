import { Injectable, inject, signal } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userService = inject(UsersService);
  users:any[]=[]
  userEmail=signal<string>('')
  constructor() { }
  login(email:string, password:string){
    return this.userService.getUsers()
  }
}
