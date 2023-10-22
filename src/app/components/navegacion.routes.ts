import { Routes } from '@angular/router';

import { DashboardComponent } from '../pages/dashboard/pages/dashboard/dashboard.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ProductosComponent } from '../pages/productos/productos/productos.component';
import { UsuariosComponent } from '../pages/usuarios/usuarios.component';

export const routesNavegacion: Routes = [

    {
      path:'', component:NavegacionComponent,
      children:[
        {path:'', component:DashboardComponent},
        {path:'productos', component:ProductosComponent},
        {path:'usuarios', component:UsuariosComponent}
      ]
    }
];
