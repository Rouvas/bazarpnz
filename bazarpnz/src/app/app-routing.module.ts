import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertComponent } from './advert/advert.component';
import { AuthComponent } from './auth/auth.component';
import { LkComponent } from './lk/lk.component';
import { EditorComponent } from './editor/editor.component';
import { AllAdvertsComponent } from './all-adverts/all-adverts.component';
import { SelectedAdvertComponent } from './selected-advert/selected-advert.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { ErrorPageComponent } from './error-page/error-page.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);
const redirectLoggedInToLk = () => redirectLoggedInTo(['lk']);

const routes: Routes = [
  {path: '', component: AdvertComponent},
  {path: 'auth', component: AuthComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToLk}},
  {path: 'lk', component: LkComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'editor', component: EditorComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: 'category/:id', component: AllAdvertsComponent},
  {path: 'advert/:id', component: SelectedAdvertComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: 'adminboard', component: AdminboardComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin}},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
