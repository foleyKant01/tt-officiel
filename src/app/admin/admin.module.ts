import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { PubliciteComponent } from './publicite/publicite.component';
import { SettingComponent } from './setting/setting.component';


@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
    HomeComponent,
    EntrepriseComponent,
    PubliciteComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
