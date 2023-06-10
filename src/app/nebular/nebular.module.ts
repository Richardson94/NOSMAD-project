import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbLayoutModule,
  NbSidebarModule,
  NbThemeModule,
  NbActionsModule,
  NbIconModule,
  NbUserModule,
  NbSearchModule,
  NbSelectModule,
} from '@nebular/theme';

@NgModule({
  imports: [
    NbCardModule,
    NbLayoutModule,
    NbButtonModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot(),
    NbIconModule,
    NbUserModule,
    NbSearchModule,
    NbSelectModule,
  ],
  exports: [
    NbSidebarModule,
    NbLayoutModule,
    NbCardModule,
    NbActionsModule,
    NbIconModule,
    NbUserModule,
    NbSearchModule,
    NbSelectModule,
  ],
})
export class NebularModule {}
