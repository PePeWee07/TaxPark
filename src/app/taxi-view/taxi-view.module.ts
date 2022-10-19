import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxiViewPageRoutingModule } from './taxi-view-routing.module';

import { TaxiViewPage } from './taxi-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxiViewPageRoutingModule
  ],
  declarations: [TaxiViewPage]
})
export class TaxiViewPageModule {}
