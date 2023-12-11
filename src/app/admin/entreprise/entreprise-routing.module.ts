import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './entreprise.component';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { ViewComponent } from './view/view.component';
import { SettingComponent } from '../setting/setting.component';

const routes: Routes = [
  { path: '', component: EntrepriseComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'create', component: CreateComponent },
  { path: 'all', component: AllComponent },
  { path: 'view', component: ViewComponent },
  { path: 'setting', component: SettingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
