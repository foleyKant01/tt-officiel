import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './entreprise.component';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { ViewComponent } from './view/view.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { HelpComponent } from './help/help.component';
import { SettingComponent } from '../setting/setting.component';

const routes: Routes = [
  {path:'', component:EntrepriseComponent,
  children:[
    {path:'create', component:CreateComponent},
    {path:'all', component:AllComponent},
    {path:'view', component:ViewComponent},
    {path:'abonnement', component:AbonnementComponent},
    {path:'setting', component:SettingComponent},
    {path:'help', component:HelpComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
