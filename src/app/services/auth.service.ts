import { Injectable, inject, signal } from '@angular/core';
import { UsersService } from './users.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userService = inject(UsersService);
  users: any[] = [];
  userEmail = signal<string>('');

  constructor() {}

  login(email: string, password: string) {
    return this.userService.getUsers().pipe(
      tap((data) => {
        if (
          data.some(
            (valor) => valor.password === password && valor.email === email
          )
        ) {
          this.userEmail.set(email);
          console.log('authservice', this.userEmail());
        }
      })
    );
  }
}
