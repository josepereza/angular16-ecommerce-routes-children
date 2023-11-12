import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AsyncPipe, NgFor } from '@angular/common';
import { NavegacionComponent } from 'src/app/modules/admin/components/navegacion/navegacion.component';
import { ChartProductsComponent } from 'src/app/modules/admin/components/chart-products/chart-products.component';
import { ChartBarrasComponent } from 'src/app/modules/admin/components/chart-barras/chart-barras.component';
import { ChartLineasComponent } from 'src/app/modules/admin/components/chart-lineas/chart-lineas.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    AsyncPipe,
    NgFor,
    NavegacionComponent,
    ChartProductsComponent,
    ChartBarrasComponent,
    ChartLineasComponent
  ],
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);
columnas:number=2
  /** Based on the screen size, switch from standard to one column per row */

  constructor(){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe((state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.Small]) {
        console.log('Matches XSmall viewport');
        this.columnas = 1;
       

      }else {this.columnas=2}
  })
}
}
