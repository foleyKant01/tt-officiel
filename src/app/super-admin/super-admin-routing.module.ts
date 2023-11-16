import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { RegisterEtsComponent } from './register-ets/register-ets.component';
import { RegisterPubComponent } from './register-pub/register-pub.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path:'',
    component: SuperAdminComponent,
    children:[
      {path:'', redirectTo:'register-ets', pathMatch:'full'},
      // {path:'menu', component:MenuComponent},
      {path:'register-ets', component:RegisterEtsComponent},
      {path:'register-pub', component:RegisterPubComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
