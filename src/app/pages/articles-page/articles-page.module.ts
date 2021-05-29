import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesPageComponent } from './articles-page.component';
import { SharedModule } from '../../shared/shared.module';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';

const routes: Routes = [{path: '', component: ArticlesPageComponent}];

@NgModule({
  declarations: [ArticlesPageComponent, ArticlePreviewComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ArticlesPageModule {}
