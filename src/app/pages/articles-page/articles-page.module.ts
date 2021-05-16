import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPageComponent } from './articles-page.component';

const routes: Routes = [{path: '', component: ArticlesPageComponent}];

@NgModule({
  declarations: [ArticlesPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ArticlesPageModule {
}
