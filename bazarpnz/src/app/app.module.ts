import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllAdvertsComponent } from './all-adverts/all-adverts.component';
import { AdvertComponent } from './advert/advert.component';

@NgModule({
  declarations: [
    AppComponent,
    AllAdvertsComponent,
    AdvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
