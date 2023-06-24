import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './pages/news/news.component';
import { TimeLineComponent } from './pages/time-line/time-line.component';

@NgModule({
  declarations: [NewsComponent, TimeLineComponent],
  imports: [CommonModule],
  exports: [NewsComponent],
})
export class HomeModule {}
