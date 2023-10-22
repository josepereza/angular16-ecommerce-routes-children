import { Routes } from '@angular/router';
import { NavegacionComponent } from './components/navegacion/navegacion.component';

export const routes: Routes = [

    {
      path:'',
      loadChildren: () =>
      import('../app/components/navegacion.routes')
          .then(m => m.routesNavegacion)
    }
];
