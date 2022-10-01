import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  {
    path: 'persona',
    loadChildren: () => import('../register/cliente/cliente.component').then(m => m.ClienteComponent)
  },
  {
    path: 'taxista',
    loadChildren: () => import('../register/taxista/taxista.component').then(m => m.TaxistaComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
