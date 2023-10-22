import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { ListadoProductsComponent } from 'src/app/components/listado-products/listado-products.component';
export interface Category {
  id: number;
  name: string;
  image: string;
}
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: Category;
}
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, ListadoProductsComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
  products:any[]=[]
 ngOnInit(): void {
  
   
 }
 

}
