import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { RegisterEtsComponent } from './register-ets/register-ets.component';
import { RegisterPubComponent } from '../super-admin/register-pub/register-pub.component';

const routes: Routes = [
  {
    path:'',
    component: UserComponent,
    children:[
      {path:'', redirectTo:'register-ets', pathMatch:'full'},
      {path:'register-ets', component:RegisterEtsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
