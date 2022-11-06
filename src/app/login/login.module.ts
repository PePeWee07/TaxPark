import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { loginPageRoutingModule} from './login-routing.module';

import { loginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    loginPageRoutingModule
  ],
  declarations: [loginPage]
})
export class LoginPageModule {}
