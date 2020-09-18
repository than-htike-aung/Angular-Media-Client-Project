import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BM_ROUTE} from './sysgen/bmroute';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BM_ROUTE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
