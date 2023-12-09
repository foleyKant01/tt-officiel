import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { AllComponent } from './all/all.component';
import { HelpComponent } from './help/help.component';
import { AbonnementComponent } from './abonnement/abonnement.component';


@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent,
    AllComponent,
    HelpComponent,
    AbonnementComponent
  ],
  imports: [
    CommonModule,
    EntrepriseRoutingModule
  ]
})
export class EntrepriseModule { }
