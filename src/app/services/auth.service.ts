import { Injectable, inject } from '@angular/core';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userService = inject(UsersService);
  users:any[]=[]
  constructor() { }
  login(email:string, password:string){
    return this.userService.getUsers()
  }
}
