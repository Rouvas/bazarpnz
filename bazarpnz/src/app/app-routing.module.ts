import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertComponent } from './advert/advert.component';
import { AuthComponent } from './auth/auth.component';
import { LkComponent } from './lk/lk.component';

const routes: Routes = [
  {path: '', component: AdvertComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'lk', component: LkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
