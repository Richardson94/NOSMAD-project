import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { primeNgModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, primeNgModule],
  exports: [HeaderComponent, FooterComponent],
})
export class LayoutTemplateModule {}
