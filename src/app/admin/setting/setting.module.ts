import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { HelpComponent } from './help/help.component';
import { AbonnementComponent } from './abonnement/abonnement.component';


@NgModule({
  declarations: [
    HelpComponent,
    AbonnementComponent
  ],
  imports: [
    CommonModule,
    SettingRoutingModule
  ]
})
export class SettingModule { }
