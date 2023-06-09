import { NgModule } from '@angular/core';
import { NbCardModule, NbThemeModule } from '@nebular/theme';

@NgModule({
  exports: [NbCardModule],
  imports: [NbThemeModule.forRoot()],
})
export class NebularModule {}
