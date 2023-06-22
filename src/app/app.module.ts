import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { primeNgModule } from './primeng/primeng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // HomeModule,
    // AppRoutingModule,
    // NavbarModule,
    primeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
