import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './super-admin.component';
import { RegisterEtsComponent } from './register-ets/register-ets.component';
import { RegisterPubComponent } from './register-pub/register-pub.component';
<<<<<<< HEAD
import { MenuComponent } from './menu/menu.component';
=======
import { HomeComponent } from './home/home.component';
>>>>>>> 138d58b3ea2cbd00fbb35b911fadddd8e983878c

const routes: Routes = [
  {
    path:'',
    component: SuperAdminComponent,
    children:[
<<<<<<< HEAD
      {path:'', redirectTo:'register-ets', pathMatch:'full'},
      // {path:'menu', component:MenuComponent},
=======
      {path:'', redirectTo:'home', pathMatch:'full'},
>>>>>>> 138d58b3ea2cbd00fbb35b911fadddd8e983878c
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
