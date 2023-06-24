import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { primeNgModule } from './primeng/primeng.module';
import { LayoutTemplateModule } from './layout-template/layout-template.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    primeNgModule,
    LayoutTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
