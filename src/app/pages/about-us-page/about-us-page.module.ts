import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUsPageComponent} from './about-us-page.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    AboutUsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AboutUsPageComponent }])
  ]
})
export class AboutUsPageModule { }
