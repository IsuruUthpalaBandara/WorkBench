import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BackgroundcompComponent } from './backgroundcomp/backgroundcomp.component';
import { NameAnimComponent } from './name-anim/name-anim.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BackgroundcompComponent,
    NameAnimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
