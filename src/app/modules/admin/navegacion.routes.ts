import { Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/pages/dashboard/dashboard.component';
import { NavegacionComponent } from './components/navegacion/navegacion.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { ProductosComponent } from './pages/productos/productos/productos.component';

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
