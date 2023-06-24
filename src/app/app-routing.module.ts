import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './home/pages/news/news.component';

const routes: Routes = [
  {
    path: 'home',
    //loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    component: NewsComponent,
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
