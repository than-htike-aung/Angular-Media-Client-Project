import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {BM_ROUTE} from './sysgen/bmroute';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import {LocalService} from "./sysgen/localservice";
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    BM_ROUTE,
    HttpClientModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
