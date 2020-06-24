import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertComponent } from './advert/advert.component';
import { AuthComponent } from './auth/auth.component';
import { LkComponent } from './lk/lk.component';
import { EditorComponent } from './editor/editor.component';
import { AllAdvertsComponent } from './all-adverts/all-adverts.component';
import { SelectedAdvertComponent } from './selected-advert/selected-advert.component';

const routes: Routes = [
  {path: '', component: AdvertComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'lk', component: LkComponent},
  {path: 'editor', component: EditorComponent},
  {path: 'category/:id', component: AllAdvertsComponent},
  {path: 'advert/:id', component: SelectedAdvertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
