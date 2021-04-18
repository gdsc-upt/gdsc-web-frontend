import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticlesPageComponent} from './articles-page.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    ArticlesPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ArticlesPageComponent }])
  ]
})
export class ArticlesPageModule { }
