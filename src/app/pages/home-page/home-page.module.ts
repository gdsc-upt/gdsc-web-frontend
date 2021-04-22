import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page.component';
import { TextImageComponent } from './text-image/text-image.component';

@NgModule({
  declarations: [
    HomePageComponent,
    TextImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomePageComponent}])
  ]
})
export class HomePageModule { }
