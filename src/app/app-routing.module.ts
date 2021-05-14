import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact-page/contact-page.module').then((m) => m.ContactPageModule),
  },
  {
    path: 'articles',
    loadChildren: () =>
      import('./pages/articles-page/articles-page.module').then(m => m.ArticlesPageModule),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./pages/about-us-page/about-us-page.module').then((m) => m.AboutUsPageModule),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/events-page/events-page.module').then((m) => m.EventsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
