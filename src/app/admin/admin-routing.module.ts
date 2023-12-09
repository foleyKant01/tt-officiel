import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PubliciteComponent } from './publicite/publicite.component';

const routes: Routes = [
  {path:'', component:AdminComponent,
  children:[
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component:HomeComponent},
    {path:'sidebar', component:SidebarComponent},
    {path:'publicite', component:PubliciteComponent},
    {path: 'entreprise',
    loadChildren: () => import('./entreprise/entreprise.module').then((m) => m.EntrepriseModule)
    },
    {path: 'setting',
    loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule)
    },
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
