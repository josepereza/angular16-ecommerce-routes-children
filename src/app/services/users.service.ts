import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);
  constructor() { }
  getUsers(){
    return this.http.get<any[]>('../../assets/data/users.json')
  }
}
