import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAdvertsComponent } from './all-adverts/all-adverts.component';
import { AdvertComponent } from './advert/advert.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap/alert';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {AngularFireModule} from '@angular/fire';

import { TextMaskModule } from 'angular2-text-mask';

import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';
import { AuthComponent } from './auth/auth.component';
import { LkComponent } from './lk/lk.component';
import { EditorComponent } from './editor/editor.component';
import { AdminboardComponent } from './adminboard/adminboard.component';
import { SelectedAdvertComponent } from './selected-advert/selected-advert.component';

@NgModule({
  declarations: [
    AppComponent,
    AllAdvertsComponent,
    AdvertComponent,
    AuthComponent,
    LkComponent,
    EditorComponent,
    AdminboardComponent,
    SelectedAdvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    BrowserAnimationsModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthGuardModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
