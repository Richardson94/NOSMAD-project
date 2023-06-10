import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NebularModule } from '../nebular/nebular.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, NebularModule],
  exports: [HomeComponent],
})
export class HomeModule {}
