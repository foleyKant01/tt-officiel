import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { RegisterEtsComponent } from './register-ets/register-ets.component';
import { RegisterPubComponent } from './register-pub/register-pub.component';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    SuperAdminComponent,
    RegisterEtsComponent,
    RegisterPubComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule
  ]
})
export class SuperAdminModule { }
