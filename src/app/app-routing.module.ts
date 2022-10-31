import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { VigilanteGuard } from './guard/vigilante.guard';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'folder/Inbox',
    redirectTo: 'lobby',
    pathMatch: 'full'
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule),
    canActivate: [VigilanteGuard]
  },
  {
    path: 'lobby',
    loadChildren: () => import('./lobby/lobby.module').then( m => m.LobbyPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./iniciar sesion/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('./request/request.module').then( m => m.RequestPageModule),
    canActivate: [VigilanteGuard]
  },
  {
    path: 'client-view',
    loadChildren: () => import('./client-view/client-view.module').then( m => m.ClientViewPageModule),
    canActivate: [VigilanteGuard]
  },
  {
    path: 'taxi-view',
    loadChildren: () => import('./taxi-view/taxi-view.module').then( m => m.TaxiViewPageModule),
    canActivate: [VigilanteGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
