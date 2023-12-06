import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './notfound/notfound.component';
// import { RegisterEtsComponent } from './super-admin/register-ets/register-ets.component';
// import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    // RegisterEtsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

    // RouterModule.forRoot([
    //   { path: 'register-ets', component: RegisterEtsComponent },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
