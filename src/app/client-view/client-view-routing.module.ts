import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientViewPage } from './client-view.page';

const routes: Routes = [
  {
    path: '',
    component: ClientViewPage
  },
  {
    path: 'profile',
    loadChildren: () => import('../client-view/profile/profile.component').then(m => m.ProfileComponent)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientViewPageRoutingModule {}
