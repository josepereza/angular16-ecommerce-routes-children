import { Component, OnInit, inject } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-chart-products',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart-products.component.html',
  styleUrls: ['./chart-products.component.css'],
})
export class ChartProductsComponent implements OnInit {
  productos: any[] = [];
  productos2: any[] = [];
  productos3: any[] = [];
  
  /* Highcharts support a range of different chart types so data can be displayed in a meaningful way. 
  Highcharts supports a long list of different chart types, among others line, spline, area, areaspline,
   column, bar, pie, scatter, gauge, arearange, areasplinerange and columnrange.
   For the full list of available chart types, see the API for Highcharts, Highcharts Stock, Highcharts Maps and Highcharts Gantt respectively.
   Ej: type:'column'
 */

  chart2= new Chart({
    chart: {
      type: 'bar'
  },
  title: {
      text: 'Fruit Consumption'
  },
  xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
  },
  yAxis: {
      title: {
          text: 'Fruit eaten'
      }
  },
  series: [{
      name: 'Jane',
      data: [1, 0, 4]
  }, {
      name: 'John',
      data: [5, 7, 3]
  }as any]

  })
  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3]
      }
    ]
  }as any);

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
 
  productosService = inject(ProductsService);

  ngOnInit(): void {
    this.productosService.getProducts().subscribe((data: any) => {
      this.productos = data;
      this.productos2 = this.productos.map((dato) => {
        return { name: dato.title, data: dato.price };
      });

      this.productos3.push(this.productos2[0],this.productos2[1],this.productos2[2])
    console.log('mis productos3',this.productos3)
    });
    
  }
}
