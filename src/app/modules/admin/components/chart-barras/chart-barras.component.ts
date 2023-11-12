import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-chart-barras',
  standalone: true,
  imports: [CommonModule,ChartModule],
  templateUrl: './chart-barras.component.html',
  styleUrls: ['./chart-barras.component.css']
})
export class ChartBarrasComponent {
  /* Highcharts support a range of different chart types so data can be displayed in a meaningful way. 
  Highcharts supports a long list of different chart types, among others line, spline, area, areaspline,
   column, bar, pie, scatter, gauge, arearange, areasplinerange and columnrange.
   For the full list of available chart types, see the API for Highcharts, Highcharts Stock, Highcharts Maps and Highcharts Gantt respectively.
   Ej: type:'column'
 */

   chart= new Chart({
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
}
