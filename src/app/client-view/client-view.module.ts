import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientViewPageRoutingModule } from './client-view-routing.module';

import { ClientViewPage } from './client-view.page';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientViewPageRoutingModule
  ],
  declarations: [ClientViewPage, ProfileComponent]
})
export class ClientViewPageModule {}
