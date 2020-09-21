import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms"

import {BM_ROUTE} from './sysgen/bmroute';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { from } from 'rxjs';
import {LocalService} from "./sysgen/localservice";
import { DetailComponent } from './detail/detail.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminGalleryComponent } from './admin/admin-gallery/admin-gallery.component';
import { GalleryCreateComponent } from './admin/gallery-create/gallery-create.component';
import { PostCreateComponent } from './admin/post-create/post-create.component';
import {AuthInterceptor} from "./sysgen/auth.interceptor";
import { PostAllComponent } from './admin/post-all/post-all.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    DetailComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminGalleryComponent,
    GalleryCreateComponent,
    PostCreateComponent,
    PostAllComponent
  ],
  imports: [
    BrowserModule,
    BM_ROUTE,
    HttpClientModule,
    ReactiveFormsModule,
    ImageCropperModule
  ],
  providers: [LocalService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
