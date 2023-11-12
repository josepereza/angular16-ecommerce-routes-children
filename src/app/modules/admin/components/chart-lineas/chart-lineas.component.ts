import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-chart-lineas',
  standalone: true,
  imports: [CommonModule,ChartModule],
  templateUrl: './chart-lineas.component.html',
  styleUrls: ['./chart-lineas.component.css']
})
export class ChartLineasComponent {

 /* Highcharts support a range of different chart types so data can be displayed in a meaningful way. 
  Highcharts supports a long list of different chart types, among others line, spline, area, areaspline,
   column, bar, pie, scatter, gauge, arearange, areasplinerange and columnrange.
   For the full list of available chart types, see the API for Highcharts, Highcharts Stock, Highcharts Maps and Highcharts Gantt respectively.
   Ej: type:'column'
 */

  chart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Linechart',
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Line 1',
        data: [1, 2, 3],
      },
    ],
  } as any);

  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
