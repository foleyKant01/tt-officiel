import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './setting.component';
import { HelpComponent } from './help/help.component';
import { AbonnementComponent } from './abonnement/abonnement.component';

const routes: Routes = [
  {path:'', component:SettingComponent},
  { path: '', redirectTo: 'abonnement', pathMatch: 'full' },
    {path:'help', component:HelpComponent},
    {path:'abonnement', component:AbonnementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
