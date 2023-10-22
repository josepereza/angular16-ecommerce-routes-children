import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/services/products.service';
import { ListadoProductsComponent } from 'src/app/components/listado-products/listado-products.component';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, ListadoProductsComponent],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{
 ngOnInit(): void {
   this.productos.getProducts().subscribe(data=>{
    console.log(data)
   })
 }
 productos=inject(ProductsService)

}
