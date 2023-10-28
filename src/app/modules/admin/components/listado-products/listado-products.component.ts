import {AfterViewInit, Component, Input, ViewChild, inject} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTable, MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ProductsService } from 'src/app/services/products.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

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
  selector: 'app-listado-products',
  templateUrl: './listado-products.component.html',
  styleUrls: ['./listado-products.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule],
})
export class ListadoProductsComponent implements AfterViewInit {
  products:any[]=[]

  displayedColumns: string[] = ['id', 'title', 'price', 'category', 'description'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    
   
  }
  ngOnInit(): void {
   
  }
  productos=inject(ProductsService)
 
  ngAfterViewInit() {
    this.productos.getProducts().subscribe((data:any)=>{
      this.products=data
      const productos2=this.products.map(dato=>{return {id:dato.id,title:dato.title,price:dato.price,category:dato.category.name,description:dato.description}})
      console.log('produtgos2', productos2)
      console.log('productos component', this.products)
      this.dataSource = new MatTableDataSource(productos2);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

     })
    
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */


