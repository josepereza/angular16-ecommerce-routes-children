import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private http = inject(HttpClient);
  constructor() { }
  getProducts(){
    return this.http.get('../../assets/data/products.json')
  }
}
