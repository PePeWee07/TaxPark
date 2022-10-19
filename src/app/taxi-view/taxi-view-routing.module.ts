import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxiViewPage } from './taxi-view.page';

const routes: Routes = [
  {
    path: '',
    component: TaxiViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxiViewPageRoutingModule {}
