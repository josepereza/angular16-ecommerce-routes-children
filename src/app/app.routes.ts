import { Routes } from '@angular/router';
import { NavegacionComponent } from './modules/admin/components/navegacion/navegacion.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full'
      },

    {
      path:'admin',canActivate:[authGuard],
      loadChildren: () =>
      import('./modules/admin/navegacion.routes')
          .then(m => m.routesNavegacion)
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.routes').then(m => m.routes),
      }
];
