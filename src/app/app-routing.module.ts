import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'admin',
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule)
  },
  {path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  // {path: 'super-admin',
  //   loadChildren: () => import('./super-admin/super-admin.module').then((m) => m.SuperAdminModule)
  // },
  {path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  },
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
