import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
//import { NebularModule } from '../nebular/nebular.module';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    //NebularModule
  ],
  exports: [NavBarComponent],
})
export class NavbarModule {}
