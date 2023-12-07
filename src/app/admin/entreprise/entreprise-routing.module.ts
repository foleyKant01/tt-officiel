import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './entreprise.component';
import { CreateComponent } from './create/create.component';
import { AllComponent } from './all/all.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'', component:EntrepriseComponent,
  children:[
    {path:'create', component:CreateComponent},
    {path:'all', component:AllComponent},
    {path:'view', component:ViewComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
