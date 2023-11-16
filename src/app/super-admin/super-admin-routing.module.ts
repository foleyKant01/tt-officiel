import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { RegisterEtsComponent } from './register-ets/register-ets.component';
import { RegisterPubComponent } from './register-pub/register-pub.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component: SuperAdminComponent,
    children:[
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'register-ets', component:RegisterEtsComponent},
      {path:'home', component:HomeComponent},
      {path:'register-pub', component:RegisterPubComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
