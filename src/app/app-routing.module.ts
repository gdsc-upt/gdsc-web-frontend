import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasePageComponent } from './pages/base-page/base-page.component';
import { RedirectGuard } from './services/redirect.guard';

const routes: Routes = [
  {
    path: '',
    component: BasePageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
      },
      {
        path: 'articles',
        loadChildren: () =>
          import('./pages/articles-page/articles-page.module').then(m => m.ArticlesPageModule)
      },
      {
        path: 'about-us',
        loadChildren: () =>
          import('./pages/about-us-page/about-us-page.module').then(m => m.AboutUsPageModule)
      },
      {
        path: 'events',
        loadChildren: () =>
          import('./pages/events-page/events-page.module').then(m => m.EventsPageModule)
      },
    ]
  },
  {
    path: '**',
    canActivate: [RedirectGuard],
    component: BasePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
